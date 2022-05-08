import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ADMIN_PRODUCT, apiUrl } from "../../constants/routes";
import { ProductForm } from "../../containers";
import useFetch from "../../hooks/useFetch";

const ProductDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();

	const [name, setName] = useState("");
	const [category, setCategory] = useState("");
	const [subCategory, setSubCategory] = useState("");
	const [description, setDescription] = useState("");
	const [basePrice, setBasePrice] = useState("");
	const [discount, setDiscount] = useState(0);
	const [selectedFile, setSelectedFile] = useState([]);
	const [options, setOptions] = useState([
		{
			color: "#ffffff",
			quantityPerSize: [{ size: "", quantity: 0 }],
		},
	]);
	const [error, setError] = useState(null);

	const { data: categories } = useFetch(`${apiUrl}/api/category`);
	const { data: subCategories } = useFetch(`${apiUrl}/api/sub-category`);
	const filteredSubCategories = subCategories?.filter(
		(item) => item.category === category
	);

	useEffect(() => {
		if (id !== "new") {
			fetch(`${apiUrl}/api/product/${id}`)
				.then((response) => response.json())
				.then((data) => {
					setName(data.name);
					setCategory(data.category);
					setSubCategory(data.subCategory);
					setDescription(data.description);
					setBasePrice(data.basePrice);
					setDiscount(data.discount);
					setOptions(data.options);
				});
		} else {
			setName("");
			setCategory("");
			setSubCategory("");
			setDescription("");
			setBasePrice("");
			setDiscount(0);
			setOptions([
				{
					color: "#ffffff",
					quantityPerSize: [{ size: "", quantity: 0 }],
				},
			]);
		}
		setError(null);
	}, [id]);

	const handleFileUpload = (index, e) => {
		const newSelectedFile = [...selectedFile];
		newSelectedFile[index] = e.target.files;
		setSelectedFile(newSelectedFile);
	};

	const addOption = () => {
		const newOption = {
			color: "#ffffff",
			quantityPerSize: [{ size: "", quantity: 0 }],
		};
		setOptions([...options, newOption]);
	};

	const addSize = (index) => {
		const newSize = { size: "", quantity: 0 };
		const newOptions = [...options];
		newOptions[index].quantityPerSize.push(newSize);
		setOptions(newOptions);
	};

	const handleColorChange = (index, e) => {
		const newOptions = [...options];
		newOptions[index].color = e.target.value;
		setOptions(newOptions);
	};

	const handleQuantityPerSizeChange = (outerIndex, index, e) => {
		const newOptions = [...options];
		newOptions[outerIndex].quantityPerSize[index][e.target.name] =
			e.target.value;
		setOptions(newOptions);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("name", name);
		formData.append("category", category);
		formData.append("subCategory", subCategory);
		formData.append("description", description);
		formData.append("basePrice", basePrice);
		formData.append("discount", discount);
		formData.append("options", JSON.stringify(options));

		selectedFile.forEach((item, index) => {
			for (let i = 0; i < item.length; i++) {
				if (item.length > 0) {
					formData.append(`${index}`, item[i]);
				}
			}
		});

		const response = await fetch(
			`http://localhost:5000/api/product/${id === "new" ? "" : id}`,
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
		navigate(ADMIN_PRODUCT);
	};

	return (
		<ProductForm
			id={id}
			name={name}
			setName={setName}
			category={category}
			setCategory={setCategory}
			subCategory={subCategory}
			setSubCategory={setSubCategory}
			description={description}
			setDescription={setDescription}
			basePrice={basePrice}
			setBasePrice={setBasePrice}
			discount={discount}
			setDiscount={setDiscount}
			selectedFile={selectedFile}
			options={options}
			error={error}
			addOption={addOption}
			addSize={addSize}
			handleColorChange={handleColorChange}
			handleFileUpload={handleFileUpload}
			handleQuantityPerSizeChange={handleQuantityPerSizeChange}
			handleSubmit={handleSubmit}
			categories={categories}
			subCategories={filteredSubCategories}
		/>
	);
};

export default ProductDetails;
