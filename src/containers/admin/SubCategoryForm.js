import { Form } from "../../components";

const SubCategoryForm = ({
	id,
	name,
	setName,
	category,
	setCategory,
	error,
	handleSubmit,
}) => {
	return (
		<Form.BigContainer>
			{id === "new" ? (
				<Form.Title>New Sub-Category</Form.Title>
			) : (
				<Form.Title>Sub-Category</Form.Title>
			)}

			{error ? <Form.Error>{error}</Form.Error> : null}

			<Form.Base onSubmit={handleSubmit}>
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
				<Form.Input
					type="text"
					name="category"
					id="category"
					required
					value={category}
					onChange={({ target }) => setCategory(target.value)}
				/>

				<Form.Button>Submit</Form.Button>
			</Form.Base>
		</Form.BigContainer>
	);
};

export default SubCategoryForm;
