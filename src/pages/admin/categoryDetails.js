import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { apiUrl } from "../../constants/routes";
import { Form } from "../../components";

const CategoryDetails = () => {
	const { id } = useParams();

	const [name, setName] = useState("");
	const [selectedFile, setSelectedFile] = useState(null);

	useEffect(() => {
		return () => {
			selectedFile && URL.revokeObjectURL(selectedFile.preview);
		};
	}, [selectedFile]);

	useEffect(() => {
		if (id !== "new") {
			fetch(`${apiUrl}/api/category/${id}`)
				.then((response) => response.json())
				.then((data) => {
					setName(data.name);
				});
		} else {
			setName("");
		}
	}, [id]);

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		file.preview = URL.createObjectURL(file);
		setSelectedFile(file);
	};

	return (
		<Form>
			<Form.BigForm>
				{id === "new" ? (
					<Form.Title>New Category</Form.Title>
				) : (
					<Form.Title>Category</Form.Title>
				)}

				<Form.Base>
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
						required
						multiple
						onChange={(e) => handleFileUpload(e)}
					>
						{selectedFile && (
							<Form.Image src={selectedFile.preview} />
						)}
					</Form.FileInput>

					<Form.Button>Submit</Form.Button>
				</Form.Base>
			</Form.BigForm>
		</Form>
	);
};

export default CategoryDetails;
