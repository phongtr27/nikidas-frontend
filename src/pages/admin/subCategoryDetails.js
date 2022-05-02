import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_SUB_CATEGORY, apiUrl } from "../../constants/routes";
import { SubCategoryForm } from "../../containers";

const SubCategoryDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [error, setError] = useState(null);

	useEffect(() => {
		if (id !== "new") {
			fetch(`${apiUrl}/api/sub-category/${id}`)
				.then((response) => response.json())
				.then((data) => {
					setName(data.name);
					setCategory(data.category);
				});
		} else {
			setName("");
			setCategory("");
		}
		setError(null);
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("category", category);

		const response = await fetch(
			`http://localhost:5000/api/sub-category/${id === "new" ? "" : id}`,
			{
				method: id === "new" ? "POST" : "PUT",
				body: JSON.stringify({ name, category }),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
					"x-auth-token": localStorage.getItem("token"),
				},
			}
		);

		if (response.status >= 400) {
			const { message } = await response.json();
			setError(message);
			return;
		}
		navigate(ADMIN_SUB_CATEGORY);
	};

	return (
		<SubCategoryForm
			id={id}
			name={name}
			setName={setName}
			category={category}
			setCategory={setCategory}
			error={error}
			handleSubmit={handleSubmit}
		/>
	);
};

export default SubCategoryDetails;
