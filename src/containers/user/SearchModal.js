import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { Modal, Form } from "../../components";
import { apiUrl, SHOP } from "../../constants/routes";
import { useLocation } from "react-router-dom";

const SearchModal = ({ showSearchModal, setShowSearchModal, modalRef }) => {
	const { pathname } = useLocation();
	const [searchTerm, setSearchTerm] = useState("");
	const [filteredProducts, setFilteredProducts] = useState([]);
	let { data: products } = useFetch(`${apiUrl}/api/product`);

	useEffect(() => {
		setSearchTerm("");
		setFilteredProducts([]);
	}, [pathname]);

	const searchItems = (searchValue) => {
		setSearchTerm(searchValue);
		if (searchValue.length >= 3) {
			const filteredData = products?.filter((product) =>
				product.name.toLowerCase().includes(searchValue.toLowerCase())
			);
			setFilteredProducts(filteredData);
		} else {
			setFilteredProducts([]);
		}
	};

	return (
		<Modal
			showModal={showSearchModal}
			setShowModal={setShowSearchModal}
			modalRef={modalRef}
			topPosition={true}
			displayNormal
		>
			<Form.Input
				type="text"
				name="searchTerm"
				id="searchTerm"
				value={searchTerm}
				onChange={({ target }) => searchItems(target.value)}
				placeholder="Search here..."
			/>
			{filteredProducts?.map((product, index) => (
				<Form.Link
					to={`${SHOP}/${product._id}`}
					key={index}
					style={{
						color: "#111111",
						textDecoration: "none",
						marginBottom: "10px",
						fontSize: "13px",
					}}
				>
					{product.name}
				</Form.Link>
			))}
		</Modal>
	);
};

export default SearchModal;
