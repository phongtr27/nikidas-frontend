import { useState, useEffect } from "react";
import { apiUrl } from "../../constants/routes";
import { ProductTable } from "../../containers";
import Pagination from "react-js-pagination";
import { toast } from "react-toastify";

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
			})
			.catch((err) => toast.error("Internal Server Error."));
	}, []);

	const handlePageChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	const handleDelete = async (id) => {
		const response = await fetch(`${apiUrl}/api/product/${id}`, {
			method: "DELETE",
			headers: {
				"x-auth-token": localStorage.getItem("token"),
			},
		});

		const { message } = await response.json();
		if (response.status >= 400) {
			toast.error(message);
			return;
		}

		setShowDeleteConfirmation(false);
		setProducts(products.filter((product) => product._id !== id));
		toast.success(message);
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
