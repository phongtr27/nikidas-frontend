import { useState } from "react";
import { apiUrl } from "../../constants/routes";
import { CategoryTable } from "../../containers";
import Pagination from "react-js-pagination";
import useFetch from "../../hooks/useFetch";
import { toast } from "react-toastify";

let PageSize = 3;

const Category = () => {
	const {
		data: categories,
		setData: setCategories,
		isLoading,
		error,
	} = useFetch(`${apiUrl}/api/category`);
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const [idToDelete, setIdToDelete] = useState(null);
	const [activePage, setActivePage] = useState(1);

	const handlePageChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	const handleDelete = async (id) => {
		try {
			const response = await fetch(`${apiUrl}/api/category/${id}`, {
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
			setCategories(
				categories?.filter((category) => category._id !== id)
			);
			toast.success(message);
			setActivePage(1);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	const firstPageIndex = (activePage - 1) * PageSize;
	const lastPageIndex = firstPageIndex + PageSize;
	const tableData = categories?.slice(firstPageIndex, lastPageIndex);

	if (error) {
		toast.error("Internal Server Error.");
		return;
	}

	return (
		<>
			<CategoryTable
				isLoading={isLoading}
				PageSize={PageSize}
				activePage={activePage}
				categories={tableData}
				showDeleteConfirmation={showDeleteConfirmation}
				setShowDeleteConfirmation={setShowDeleteConfirmation}
				handleDelete={handleDelete}
				idToDelete={idToDelete}
				setIdToDelete={setIdToDelete}
			/>

			<Pagination
				activePage={activePage}
				itemsCountPerPage={PageSize}
				totalItemsCount={categories?.length || 0}
				pageRangeDisplayed={3}
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

export default Category;
