import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../constants/routes";
import { Form, Table } from "../../components";

const ProductDetails = () => {
	const { id } = useParams();

	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");
	const [description, setDescription] = useState("");
	const [basePrice, setBasePrice] = useState("");
	const [discount, setDiscount] = useState("");
	const [selectedFile, setSelectedFile] = useState([]);
	const [options, setOptions] = useState([
		{
			color: "#ffffff",
			quantityPerSize: [{ size: "", quantity: 0 }],
		},
	]);

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
			setDiscount("");
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

	return (
		<Form>
			<Form.BigForm>
				<Form.Title>New Product</Form.Title>
				<Form.Base>
					<Form.Label htmlFor="name">Product Name</Form.Label>
					<Form.Input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>

					<Form.Label htmlFor="category">Category</Form.Label>
					<Form.Input
						type="text"
						name="category"
						id="category"
						value={category}
						onChange={({ target }) => setCategory(target.value)}
					/>

					<Form.Label htmlFor="subCategory">Sub-Category</Form.Label>
					<Form.Input
						type="text"
						name="subCategory"
						id="subCategory"
						value={subCategory}
						onChange={({ target }) => setSubCategory(target.value)}
					/>

					<Form.Label htmlFor="description">Description</Form.Label>
					<Form.TextArea
						type="text"
						name="description"
						id="description"
						value={description}
						onChange={({ target }) => setDescription(target.value)}
					/>

					<Form.Label htmlFor="basePrice">Price ($)</Form.Label>
					<Form.Input
						type="text"
						name="basePrice"
						id="basePrice"
						value={basePrice}
						onChange={({ target }) => setBasePrice(target.value)}
					/>

					<Form.Label htmlFor="discount">Discount (%)</Form.Label>
					<Form.Input
						type="text"
						name="discount"
						id="discount"
						value={discount}
						onChange={({ target }) => setDiscount(target.value)}
					/>

					<Form.Label>
						Product Attributes{" "}
						<i
							className="fas fa-plus-square"
							onClick={addOption}
						></i>{" "}
					</Form.Label>

					{options.map((option, outerIndex) => (
						<Form.MidForm key={outerIndex}>
							<Form.Text>{`Option ${outerIndex + 1}`}</Form.Text>
							{/* <Form.Label htmlFor="color">
								Color{" "}
								<Form.Input
									type="color"
									name="color"
									id="color"
									value={option.color}
									onChange={(e) =>
										handleColorChange(outerIndex, e)
									}
								/>
							</Form.Label> */}
							<Form.Label htmlFor="color">Color</Form.Label>
							<Form.ColorInput
								type="color"
								name="color"
								id="color"
								value={option.color}
								onChange={(e) =>
									handleColorChange(outerIndex, e)
								}
							/>

							<Form.Label htmlFor="image">Image</Form.Label>
							<Form.FileInput
								type="file"
								name="image"
								id="image"
								accept="image/png, image/jpg, image/gif, image/jpeg"
								onChange={(e) =>
									handleFileUpload(outerIndex, e)
								}
								multiple
							>
								Choose Images
							</Form.FileInput>

							<Table.Base>
								<Table.Head>
									<Table.Row>
										<Table.Header>Size</Table.Header>
										<Table.Header>Quantity</Table.Header>
									</Table.Row>
								</Table.Head>
								<Table.Body>
									{option.quantityPerSize.map(
										(item, index) => (
											<Table.Row key={index}>
												<Table.Data>
													<Form.Input
														type="text"
														id="size"
														name="size"
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
										)
									)}
								</Table.Body>
							</Table.Base>
							<Form.Text onClick={() => addSize(outerIndex)}>
								Add more...
							</Form.Text>
						</Form.MidForm>
					))}
					<Form.Button>Submit</Form.Button>
				</Form.Base>
			</Form.BigForm>
		</Form>
	);
};

export default ProductDetails;
