import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_PRODUCT, apiUrl } from "../../constants/routes";
import { Form, Table } from "../../components";

const ProductDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");
	const [description, setDescription] = useState("");
	const [basePrice, setBasePrice] = useState("");
	const [discount, setDiscount] = useState(0);
	const [selectedFile, setSelectedFile] = useState([]);
	const [options, setOptions] = useState([
		{
			color: "#ffffff",
			quantityPerSize: [{ size: "", quantity: 0 }],
		},
	]);
	const [error, setError] = useState(null);

	useEffect(() => {
		if (id !== "new") {
			fetch(`${apiUrl}/api/product/${id}`)
				.then((response) => response.json())
				.then((data) => {
					setName(data.name);
					setCategory(data.category);
					setSubCategory(data.subCategory);
					setDescription(data.description);
					setBasePrice(data.basePrice);
					setDiscount(data.discount);
					setOptions(data.options);
				});
		} else {
			setName("");
			setCategory("");
			setSubCategory("");
			setDescription("");
			setBasePrice("");
			setDiscount(0);
			setOptions([
				{
					color: "#ffffff",
					quantityPerSize: [{ size: "", quantity: 0 }],
				},
			]);
		}
	}, [id]);

	const handleFileUpload = (index, e) => {
		const newSelectedFile = [...selectedFile];
		newSelectedFile[index] = e.target.files;
		setSelectedFile(newSelectedFile);
	};

	const addOption = () => {
		const newOption = {
			color: "#ffffff",
			quantityPerSize: [{ size: "", quantity: 0 }],
		};
		setOptions([...options, newOption]);
	};

	const addSize = (index) => {
		const newSize = { size: "", quantity: 0 };
		const newOptions = [...options];
		newOptions[index].quantityPerSize.push(newSize);
		setOptions(newOptions);
	};

	const handleColorChange = (index, e) => {
		const newOptions = [...options];
		newOptions[index].color = e.target.value;
		setOptions(newOptions);
	};

	const handleQuantityPerSizeChange = (outerIndex, index, e) => {
		const newOptions = [...options];
		newOptions[outerIndex].quantityPerSize[index][e.target.name] =
			e.target.value;
		setOptions(newOptions);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("category", category);
		formData.append("subCategory", subCategory);
		formData.append("description", description);
		formData.append("basePrice", basePrice);
		formData.append("discount", discount);
		formData.append("options", JSON.stringify(options));

		selectedFile.forEach((item, index) => {
			for (let i = 0; i < item.length; i++) {
				if (item.length > 0) {
					formData.append(`${index}`, item[i]);
				}
			}
		});

		const response = await fetch(
			`http://localhost:5000/api/product/${id === "new" ? "" : id}`,
			{
				method: id === "new" ? "POST" : "PUT",
				body: formData,
				headers: {
					Accept: "multipart/form-data",
					"x-auth-token": localStorage.getItem("token"),
				},
			}
		);

		if (response.status >= 400) {
			const { message } = await response.json();
			setError(message);
			return;
		}
		navigate(ADMIN_PRODUCT);
	};

	return (
		<Form.BigForm>
			{id === "new" ? (
				<Form.Title>New Product</Form.Title>
			) : (
				<Form.Title>Product</Form.Title>
			)}

			{error ? <Form.Error>{error}</Form.Error> : null}

			<Form.Base onSubmit={handleSubmit}>
				<Form.Label htmlFor="name">Product Name</Form.Label>
				<Form.Input
					type="text"
					name="name"
					id="name"
					required
					value={name}
					onChange={({ target }) => setName(target.value)}
				/>

				<Form.Label htmlFor="category">Category</Form.Label>
				<Form.Input
					type="text"
					name="category"
					id="category"
					required
					value={category}
					onChange={({ target }) => setCategory(target.value)}
				/>

				<Form.Label htmlFor="subCategory">Sub-Category</Form.Label>
				<Form.Input
					type="text"
					name="subCategory"
					id="subCategory"
					required
					value={subCategory}
					onChange={({ target }) => setSubCategory(target.value)}
				/>

				<Form.Label htmlFor="description">Description</Form.Label>
				<Form.TextArea
					type="text"
					name="description"
					id="description"
					required
					value={description}
					onChange={({ target }) => setDescription(target.value)}
				/>

				<Form.Label htmlFor="basePrice">Price ($)</Form.Label>
				<Form.Input
					type="text"
					name="basePrice"
					id="basePrice"
					required
					value={basePrice}
					onChange={({ target }) => setBasePrice(target.value)}
				/>

				<Form.Label htmlFor="discount">Discount (%)</Form.Label>
				<Form.Input
					type="number"
					name="discount"
					id="discount"
					required
					value={discount}
					onChange={({ target }) => setDiscount(target.value)}
				/>

				<Form.Label>
					Product Attributes{"  "}
					<Form.SmallButton onClick={addOption}>
						{" "}
						<i className="fas fa-plus-square"></i>
					</Form.SmallButton>
				</Form.Label>

				{options.map((option, outerIndex) => (
					<Form.MidForm key={outerIndex}>
						<Form.Text>{`Option ${outerIndex + 1}`}</Form.Text>

						<Form.Label htmlFor="color">Color</Form.Label>
						<Form.ColorInput
							type="color"
							name="color"
							id="color"
							value={option.color}
							onChange={(e) => handleColorChange(outerIndex, e)}
						/>

						<Form.Label htmlFor="image">Image</Form.Label>
						<Form.FileInput
							type="file"
							name="image"
							id="image"
							accept="image/*"
							onChange={(e) => handleFileUpload(outerIndex, e)}
							multiple
						>
							{option.img && (
								<div>
									{option.img.map((image, index) => (
										<Form.Image
											key={index}
											src={`${apiUrl}/public${image}`}
											alt="product image"
										/>
									))}
								</div>
							)}
						</Form.FileInput>

						<Table.Base>
							<Table.Head>
								<Table.Row>
									<Table.Header>Size</Table.Header>
									<Table.Header>Quantity</Table.Header>
								</Table.Row>
							</Table.Head>
							<Table.Body>
								{option.quantityPerSize.map((item, index) => (
									<Table.Row key={index}>
										<Table.Data>
											<Form.Input
												type="text"
												id="size"
												name="size"
												required
												value={item.size}
												onChange={(e) =>
													handleQuantityPerSizeChange(
														outerIndex,
														index,
														e
													)
												}
											/>
										</Table.Data>
										<Table.Data>
											<Form.Input
												type="number"
												id="quantity"
												name="quantity"
												required
												value={item.quantity}
												onChange={(e) =>
													handleQuantityPerSizeChange(
														outerIndex,
														index,
														e
													)
												}
											/>
										</Table.Data>
									</Table.Row>
								))}
							</Table.Body>
						</Table.Base>
						<Form.SmallButton onClick={() => addSize(outerIndex)}>
							Add more...
						</Form.SmallButton>
					</Form.MidForm>
				))}
				<Form.Button>Submit</Form.Button>
			</Form.Base>
		</Form.BigForm>
	);
};

export default ProductDetails;
