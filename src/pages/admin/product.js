import { useState, useEffect } from "react";
import { apiUrl } from "../../constants/routes";
import { ProductTable } from "../../containers";
import Pagination from "react-js-pagination";

let PageSize = 7;

const Product = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [products, setProducts] = useState([]);
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const [idToDelete, setIdToDelete] = useState(null);
	const [activePage, setActivePage] = useState(1);

	useEffect(() => {
		fetch(`${apiUrl}/api/product`)
			.then((response) => response.json())
			.then((data) => {
				setProducts([...data]);
				setIsLoading(false);
			});
	}, []);

	const handlePageChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	const handleDelete = async (id) => {
		const response = await fetch(
			`http://localhost:5000/api/product/${id}`,
			{
				method: "DELETE",
				headers: {
					"x-auth-token": localStorage.getItem("token"),
				},
			}
		);

		if (response.status >= 400) {
			const { message } = await response.json();
			console.log(message);
			return;
		}
		setShowDeleteConfirmation(false);
		setProducts(products.filter((product) => product._id !== id));
		setActivePage(1);
	};

	const firstPageIndex = (activePage - 1) * PageSize;
	const lastPageIndex = firstPageIndex + PageSize;
	const tableData = products.slice(firstPageIndex, lastPageIndex);

	return (
		<>
			<ProductTable
				isLoading={isLoading}
				products={tableData}
				showDeleteConfirmation={showDeleteConfirmation}
				setShowDeleteConfirmation={setShowDeleteConfirmation}
				handleDelete={handleDelete}
				idToDelete={idToDelete}
				setIdToDelete={setIdToDelete}
			/>

			<Pagination
				activePage={activePage}
				itemsCountPerPage={PageSize}
				totalItemsCount={products.length}
				pageRangeDisplayed={5}
				onChange={handlePageChange}
				hideDisabled={true}
				itemClass="page-item"
				linkClass="page-link"
				hideFirstLastPages={true}
				prevPageText={<i className="fas fa-chevron-left"></i>}
				nextPageText={<i className="fas fa-chevron-right"></i>}
			/>
		</>
	);
};

export default Product;
