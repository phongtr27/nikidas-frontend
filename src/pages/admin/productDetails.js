import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../constants/routes";
import { Form } from "../../components";

const ProductDetails = () => {
	const { id } = useParams();
	console.log(id);

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
		}
	});

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

					<p>
						Product Attributes{" "}
						<i
							className="fas fa-plus-square"
							onClick={addOption}
						></i>{" "}
					</p>

					{options.map((option, outerIndex) => (
						<div key={outerIndex}>
							<label htmlFor="color">
								Color:
								<input
									type="color"
									id="color"
									name="color"
									value={option.color}
									onChange={(e) =>
										handleColorChange(outerIndex, e)
									}
								/>
							</label>

							<label htmlFor="image">
								Image:
								<input
									type="file"
									id="image"
									name="image"
									onChange={(e) =>
										handleFileUpload(outerIndex, e)
									}
									multiple
								/>
							</label>

							<table>
								<thead>
									<tr>
										<th>Size</th>
										<th>Quantity</th>
									</tr>
								</thead>
								<tbody>
									{option.quantityPerSize.map(
										(subField, index) => (
											<tr key={index}>
												<td>
													<input
														type="text"
														id="size"
														name="size"
														value={subField.size}
														onChange={(e) =>
															handleQuantityPerSizeChange(
																outerIndex,
																index,
																e
															)
														}
													/>
												</td>
												<td>
													<input
														type="number"
														id="quantity"
														name="quantity"
														value={
															subField.quantity
														}
														onChange={(e) =>
															handleQuantityPerSizeChange(
																outerIndex,
																index,
																e
															)
														}
													/>
												</td>
											</tr>
										)
									)}
								</tbody>
							</table>
							<button onClick={() => addSize(outerIndex)}>
								Add more...
							</button>
						</div>
					))}
				</Form.Base>
			</Form.BigForm>
		</Form>
	);
};

export default ProductDetails;
