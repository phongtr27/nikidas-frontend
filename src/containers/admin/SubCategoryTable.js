import React from "react";
import { Loading, Table } from "../../components";
import { DeleteConfirmation } from "../../containers";

const SubCategoryTable = ({
	isLoading,
	subCategories,
	showDeleteConfirmation,
	setShowDeleteConfirmation,
	handleDelete,
	idToDelete,
	setIdToDelete,
}) => {
	return (
		<>
			{isLoading ? <Loading /> : <Loading.ReleaseBody />}
			<Table>
				<Table.Base>
					<Table.Head>
						<Table.Row>
							<Table.Header>No</Table.Header>
							<Table.Header>Sub-Category Name</Table.Header>
							<Table.Header>Category</Table.Header>
							<Table.Header>Action</Table.Header>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{subCategories.map((subCategory, index) => (
							<Table.Row key={index}>
								<Table.Data>{index + 1}</Table.Data>

								<Table.Data>{subCategory.name}</Table.Data>

								<Table.Data>{subCategory.category}</Table.Data>

								<Table.Data>
									<Table.Button>
										<Table.Link to={`${subCategory._id}`}>
											<i className="fas fa-edit"></i>
										</Table.Link>
									</Table.Button>

									<Table.Button
										onClick={() => {
											setIdToDelete(subCategory._id);
											setShowDeleteConfirmation(true);
										}}
									>
										<i className="fas fa-trash-alt"></i>
									</Table.Button>
								</Table.Data>
							</Table.Row>
						))}
					</Table.Body>
				</Table.Base>
			</Table>

			<DeleteConfirmation
				showDeleteConfirmation={showDeleteConfirmation}
				setShowDeleteConfirmation={setShowDeleteConfirmation}
				handleDelete={handleDelete}
				idToDelete={idToDelete}
			/>
		</>
	);
};

export default SubCategoryTable;