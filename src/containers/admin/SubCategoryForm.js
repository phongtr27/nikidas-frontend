import { Form, Loading } from "../../components";

const SubCategoryForm = ({
	id,
	isLoading,
	name,
	setName,
	category,
	setCategory,
	error,
	handleSubmit,
	categories,
}) => {
	return (
		<>
			{isLoading ? <Loading /> : <Loading.ReleaseBody />}
			<Form.BigContainer>
				{id === "new" ? (
					<Form.Title>New Sub-Category</Form.Title>
				) : (
					<Form.Title>Sub-Category</Form.Title>
				)}

				{error ? <Form.Error>{error}</Form.Error> : null}

				<Form.Base onSubmit={handleSubmit} width="35%">
					<Form.Label htmlFor="name">Sub-Category Name</Form.Label>
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

					<Form.Button>Submit</Form.Button>
				</Form.Base>
			</Form.BigContainer>
		</>
	);
};

export default SubCategoryForm;