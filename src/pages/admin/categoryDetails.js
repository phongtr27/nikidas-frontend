import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_CATEGORY, apiUrl } from "../../constants/routes";
import { Form } from "../../components";

const CategoryDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [img, setImg] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);
	const [error, setError] = useState(null);

	useEffect(() => {
		return () => {
			selectedFile && URL.revokeObjectURL(selectedFile.preview);
		};
	}, [selectedFile]);

	console.log(selectedFile);

	useEffect(() => {
		if (id !== "new") {
			fetch(`${apiUrl}/api/category/${id}`)
				.then((response) => response.json())
				.then((data) => {
					setName(data.name);
					setImg(data.img);
				});
		} else {
			setName("");
			setImg(null);
		}
	}, [id]);

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			file.preview = URL.createObjectURL(file);
			setSelectedFile(file);
		} else {
			setSelectedFile(null);
		}
		setImg(null);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		if (selectedFile) {
			formData.append("category", selectedFile);
		}

		const response = await fetch(
			`http://localhost:5000/api/category/${id === "new" ? "" : id}`,
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

		navigate(ADMIN_CATEGORY);
	};

	return (
		<Form.BigForm>
			{id === "new" ? (
				<Form.Title>New Category</Form.Title>
			) : (
				<Form.Title>Category</Form.Title>
			)}

			{error ? <Form.Error>{error}</Form.Error> : null}

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
					{selectedFile && <Form.Image src={selectedFile.preview} />}
					{img && (
						<Form.Image
							src={`${apiUrl}/public${img}`}
							alt="category image"
						/>
					)}
				</Form.FileInput>

				<Form.Button>Submit</Form.Button>
			</Form.Base>
		</Form.BigForm>
	);
};

export default CategoryDetails;
