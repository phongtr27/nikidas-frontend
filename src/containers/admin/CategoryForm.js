import { Form, Loading } from "../../components";
import { apiUrl } from "../../constants/routes";

const CategoryForm = ({
	id,
	isLoading,
	name,
	setName,
	img,
	selectedFile,
	error,
	handleFileUpload,
	handleSubmit,
}) => {
	return (
		<>
			{isLoading ? <Loading /> : <Loading.ReleaseBody />}
			<Form.BigContainer>
				{id === "new" ? (
					<Form.Title>New Category</Form.Title>
				) : (
					<Form.Title>Category</Form.Title>
				)}

				{error ? <Form.Error>{error}</Form.Error> : null}

				<Form.Base onSubmit={handleSubmit} width="35%">
					<Form.Label htmlFor="name">Category Name</Form.Label>
					<Form.Input
						type="text"
						name="name"
						id="name"
						required
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>

					<Form.Label htmlFor="image">Image</Form.Label>
					<Form.FileInput
						type="file"
						name="image"
						id="image"
						accept="image/*"
						multiple
						onChange={(e) => handleFileUpload(e)}
					>
						{selectedFile && (
							<Form.Image src={selectedFile.preview} />
						)}
						{img && !selectedFile && (
							<Form.Image
								src={`${apiUrl}/public${img}`}
								alt="category image"
							/>
						)}
					</Form.FileInput>

					<Form.Button>Submit</Form.Button>
				</Form.Base>
			</Form.BigContainer>
		</>
	);
};

export default CategoryForm;
