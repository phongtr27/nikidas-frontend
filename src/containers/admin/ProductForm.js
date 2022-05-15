import { Form, Loading, Table } from "../../components";
import { apiUrl } from "../../constants/routes";

const ProductForm = ({
	id,
	isLoading,
	name,
	setName,
	category,
	setCategory,
	subCategory,
	setSubCategory,
	description,
	setDescription,
	price,
	setPrice,
	discount,
	setDiscount,
	selectedFile,
	options,
	addOption,
	addSize,
	handleColorChange,
	handleFileUpload,
	handleQuantityPerSizeChange,
	handleSubmit,
	categories,
	subCategories,
}) => {
	return (
		<>
			{isLoading ? <Loading /> : null}
			<Form.BigContainer>
				{id === "new" ? (
					<Form.Title>New Product</Form.Title>
				) : (
					<Form.Title>Product</Form.Title>
				)}

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
					<Form.Select
						name="category"
						id="category"
						required
						value={category}
						onChange={({ target }) => setCategory(target.value)}
					>
						<Form.Option value="" disabled hidden>
							--- Select an option ---
						</Form.Option>
						{categories?.map((option, index) => (
							<Form.Option value={option?.name} key={index}>
								{option?.name}
							</Form.Option>
						))}
					</Form.Select>

					<Form.Label htmlFor="subCategory">Sub-Category</Form.Label>
					<Form.Select
						name="subCategory"
						id="subCategory"
						required
						value={subCategory}
						onChange={({ target }) => setSubCategory(target.value)}
					>
						<Form.Option value="" disabled hidden>
							--- Select an option ---
						</Form.Option>
						{subCategories?.map((option, index) => (
							<Form.Option value={option?.name} key={index}>
								{option?.name}
							</Form.Option>
						))}
					</Form.Select>

					<Form.Label htmlFor="description">Description</Form.Label>
					<Form.TextArea
						type="text"
						name="description"
						id="description"
						required
						value={description}
						onChange={({ target }) => setDescription(target.value)}
					/>

					<Form.Label htmlFor="price">Price ($)</Form.Label>
					<Form.Input
						type="text"
						name="price"
						id="price"
						required
						value={price}
						onChange={({ target }) => setPrice(target.value)}
					/>

					<Form.Label htmlFor="discount">Discount (%)</Form.Label>
					<Form.Input
						type="number"
						name="discount"
						id="discount"
						required
						min={0}
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
						<Form.MidContainer key={outerIndex}>
							<Form.Text>{`Option ${outerIndex + 1}`}</Form.Text>

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
								accept="image/*"
								onChange={(e) =>
									handleFileUpload(outerIndex, e)
								}
								multiple
							>
								{option.img &&
									(!selectedFile[outerIndex] ||
										selectedFile[outerIndex]?.length ===
											0) && (
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
									{option.quantityPerSize.map(
										(item, index) => (
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
														min={1}
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
										)
									)}
								</Table.Body>
							</Table.Base>
							<Form.SmallButton
								onClick={() => addSize(outerIndex)}
							>
								Add more...
							</Form.SmallButton>
						</Form.MidContainer>
					))}
					<Form.Button>Submit</Form.Button>
				</Form.Base>
			</Form.BigContainer>
		</>
	);
};

export default ProductForm;
