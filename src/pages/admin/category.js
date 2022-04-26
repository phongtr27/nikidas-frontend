import { useState, useEffect } from "react";
import { Table } from "../../components";
import { apiUrl } from "../../constants/routes";

const Category = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		fetch(`${apiUrl}/api/category`)
			.then((response) => response.json())
			.then((data) => setCategories([...data]));
	}, []);

	return (
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
								<Table.Button>
									<Table.Button>
										<i class="fas fa-trash-alt"></i>
									</Table.Button>
								</Table.Button>
							</Table.Data>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Base>
		</Table>
	);
};

export default Category;
