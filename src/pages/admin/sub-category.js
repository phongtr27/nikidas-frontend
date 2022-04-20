import { useState, useEffect } from "react";
import { Table } from "../../components";
import { apiUrl } from "../../constants/routes";

const SubCategory = () => {
	const [subCategories, setSubCategories] = useState([]);

	useEffect(() => {
		fetch(`${apiUrl}/api/sub-category`)
			.then((response) => response.json())
			.then((data) => setSubCategories([...data]));
	}, []);

	return (
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
							<Table.Data>delete</Table.Data>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Base>
		</Table>
	);
};

export default SubCategory;
