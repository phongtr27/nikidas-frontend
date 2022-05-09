import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_SUB_CATEGORY, apiUrl } from "../../constants/routes";
import { SubCategoryForm } from "../../containers";
import useFetch from "../../hooks/useFetch";

const SubCategoryDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(true);
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [error, setError] = useState(null);
	const { data: categories } = useFetch(`${apiUrl}/api/category`);

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
		setIsLoading(false);
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
			isLoading={isLoading}
			name={name}
			setName={setName}
			category={category}
			setCategory={setCategory}
			error={error}
			handleSubmit={handleSubmit}
			categories={categories}
		/>
	);
};

export default SubCategoryDetails;
