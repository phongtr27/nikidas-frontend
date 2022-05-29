import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_CATEGORY, apiUrl } from "../../constants/routes";
import { CategoryForm } from "../../containers";
import { toast } from "react-toastify";

const CategoryDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(true);
	const [name, setName] = useState("");
	const [img, setImg] = useState(null);
	const [selectedFile, setSelectedFile] = useState(null);

	useEffect(() => {
		return () => {
			selectedFile && URL.revokeObjectURL(selectedFile.preview);
		};
	}, [selectedFile]);

	useEffect(() => {
		if (id !== "new") {
			fetch(`${apiUrl}/api/category/${id}`)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					return Promise.reject(response);
				})
				.then((data) => {
					setName(data.name);
					setImg(data.img);
				})
				.catch((err) => {
					navigate(`${ADMIN_CATEGORY}/new`);
					toast.error(err.statusText);
				});
		} else {
			setName("");
			setImg(null);
		}
		setIsLoading(false);
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
			`${apiUrl}/api/category/${id === "new" ? "" : id}`,
			{
				method: id === "new" ? "POST" : "PUT",
				body: formData,
				headers: {
					Accept: "multipart/form-data",
					"x-auth-token": localStorage.getItem("token"),
				},
			}
		);

		const { message } = await response.json();
		if (response.status >= 400) {
			toast.error(message);
			return;
		}

		navigate(ADMIN_CATEGORY);
		toast.success(message);
	};

	return (
		<CategoryForm
			id={id}
			isLoading={isLoading}
			name={name}
			setName={setName}
			img={img}
			selectedFile={selectedFile}
			handleFileUpload={handleFileUpload}
			handleSubmit={handleSubmit}
		/>
	);
};

export default CategoryDetails;
