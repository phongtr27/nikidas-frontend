import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_CATEGORY, apiUrl } from "../../constants/routes";
import { CategoryForm } from "../../containers";

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
		setError(null);
	}, [id]);

	const handleFileUpload = (e) => {
		const file = e.target.files[0];
		if (file) {
			file.preview = URL.createObjectURL(file);
			setSelectedFile(file);
		} else {
			setSelectedFile(null);
		}
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

	console.log(img);

	return (
		<CategoryForm
			id={id}
			name={name}
			setName={setName}
			img={img}
			selectedFile={selectedFile}
			error={error}
			handleFileUpload={handleFileUpload}
			handleSubmit={handleSubmit}
		/>
	);
};

export default CategoryDetails;
