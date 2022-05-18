import { Form, Loading } from "../../components";
import { apiUrl } from "../../constants/routes";

const CategoryForm = ({
	id,
	isLoading,
	name,
	setName,
	img,
	selectedFile,
	handleFileUpload,
	handleSubmit,
}) => {
	return (
		<div className="main">
			{isLoading ? <Loading /> : null}
			<Form.BigContainer>
				{id === "new" ? (
					<Form.Title>New Category</Form.Title>
				) : (
					<Form.Title>Category</Form.Title>
				)}

				<Form.Base onSubmit={handleSubmit}>
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

					<Form.Button
						type="submit"
						background_color="#00c292"
						hover_color="#009c75"
					>
						Submit
					</Form.Button>
				</Form.Base>
			</Form.BigContainer>
		</div>
	);
};

export default CategoryForm;
