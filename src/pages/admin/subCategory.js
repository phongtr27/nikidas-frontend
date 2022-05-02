import { useState, useEffect } from "react";
import { apiUrl } from "../../constants/routes";
import { SubCategoryTable } from "../../containers";
import Pagination from "react-js-pagination";

let PageSize = 7;

const SubCategory = () => {
	const [subCategories, setSubCategories] = useState([]);
	const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
	const [idToDelete, setIdToDelete] = useState(null);
	const [activePage, setActivePage] = useState(1);

	useEffect(() => {
		fetch(`${apiUrl}/api/sub-category`)
			.then((response) => response.json())
			.then((data) => setSubCategories([...data]));
	}, []);

	const handlePageChange = (pageNumber) => {
		setActivePage(pageNumber);
	};

	const handleDelete = async (id) => {
		const response = await fetch(
			`http://localhost:5000/api/sub-category/${id}`,
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
		setSubCategories(
			subCategories.filter((subCategory) => subCategory._id !== id)
		);
	};

	const firstPageIndex = (activePage - 1) * PageSize;
	const lastPageIndex = firstPageIndex + PageSize;
	const tableData = subCategories.slice(firstPageIndex, lastPageIndex);

	return (
		<>
			<SubCategoryTable
				subCategories={tableData}
				showDeleteConfirmation={showDeleteConfirmation}
				setShowDeleteConfirmation={setShowDeleteConfirmation}
				handleDelete={handleDelete}
				idToDelete={idToDelete}
				setIdToDelete={setIdToDelete}
			/>

			<Pagination
				activePage={activePage}
				itemsCountPerPage={PageSize}
				totalItemsCount={subCategories.length}
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

export default SubCategory;
