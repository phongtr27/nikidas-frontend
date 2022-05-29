import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_SUB_CATEGORY, apiUrl } from "../../constants/routes";
import { SubCategoryForm } from "../../containers";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";

const SubCategoryDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(true);
	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const { data: categories } = useFetch(`${apiUrl}/api/category`);

	useEffect(() => {
		if (id !== "new") {
			fetch(`${apiUrl}/api/sub-category/${id}`)
				.then((response) => {
					if (response.ok) {
						return response.json();
					}
					return Promise.reject(response);
				})
				.then((data) => {
					setName(data.name);
					setCategory(data.category);
				})
				.catch((err) => {
					navigate(`${ADMIN_SUB_CATEGORY}/new`);
					toast.error(err.statusText);
				});
		} else {
			setName("");
			setCategory("");
		}
		setIsLoading(false);
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("category", category);

		const response = await fetch(
			`${apiUrl}/api/sub-category/${id === "new" ? "" : id}`,
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

		const { message } = await response.json();
		if (response.status >= 400) {
			toast.error(message);
			return;
		}

		navigate(ADMIN_SUB_CATEGORY);
		toast.success(message);
	};

	return (
		<SubCategoryForm
			id={id}
			isLoading={isLoading}
			name={name}
			setName={setName}
			category={category}
			setCategory={setCategory}
			handleSubmit={handleSubmit}
			categories={categories}
		/>
	);
};

export default SubCategoryDetails;
