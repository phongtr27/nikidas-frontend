import React from "react";
import { Loading, Table } from "../../components";
import { DeleteConfirmation } from "../../containers";
import { apiUrl } from "../../constants/routes";

const CategoryTable = ({
	isLoading,
	categories,
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
							<Table.Header>Category Name</Table.Header>
							<Table.Header>Category Image</Table.Header>
							<Table.Header>Action</Table.Header>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{categories.map((category, index) => (
							<Table.Row key={index}>
								<Table.Data>{index + 1}</Table.Data>

								<Table.Data>{category.name}</Table.Data>

								<Table.Data>
									<Table.Image
										src={`${apiUrl}/public${category.img}`}
										alt={category.name}
									/>
								</Table.Data>

								<Table.Data>
									<Table.Button>
										<Table.Link to={`${category._id}`}>
											<i className="fas fa-edit"></i>
										</Table.Link>
									</Table.Button>

									<Table.Button
										onClick={() => {
											setIdToDelete(category._id);
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

export default CategoryTable;
