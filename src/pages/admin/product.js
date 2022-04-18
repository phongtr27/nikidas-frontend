import { useState, useEffect } from "react";
import { Table } from "../../components";
import { apiUrl } from "../../constants/routes";

const Product = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log("hello");
		fetch(`${apiUrl}/api/product`)
			.then((response) => response.json())
			.then((data) => setProducts([...data]));
	}, []);

	return (
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
							<Table.Data>delete</Table.Data>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Base>
		</Table>
	);
};

export default Product;
