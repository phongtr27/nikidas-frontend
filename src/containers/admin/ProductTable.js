import React from "react";
import { Table } from "../../components";
import { DeleteConfirmation } from "../../containers";

const ProductTable = ({
	products,
	showDeleteConfirmation,
	setShowDeleteConfirmation,
	handleDelete,
	idToDelete,
	setIdToDelete,
}) => {
	return (
		<>
			<Table>
				<Table.Base>
					<Table.Head>
						<Table.Row>
							<Table.Header>No</Table.Header>
							<Table.Header>Name</Table.Header>
							<Table.Header>Price</Table.Header>
							<Table.Header>Category</Table.Header>
							<Table.Header>Sub-Category</Table.Header>
							<Table.Header>Action</Table.Header>
						</Table.Row>
					</Table.Head>

					<Table.Body>
						{products.map((product, index) => (
							<Table.Row key={index}>
								<Table.Data>{index + 1}</Table.Data>

								<Table.Data>{product.name}</Table.Data>

								<Table.Data>{product.basePrice}</Table.Data>

								<Table.Data>{product.category}</Table.Data>

								<Table.Data>{product.subCategory}</Table.Data>

								<Table.Data>
									<Table.Button>
										<Table.Link to={`${product._id}`}>
											<i className="fas fa-edit"></i>
										</Table.Link>
									</Table.Button>

									<Table.Button
										onClick={() => {
											setIdToDelete(product._id);
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

export default ProductTable;
