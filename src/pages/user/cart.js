import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart";
import useFetch from "../../hooks/useFetch";
import { apiUrl, ERROR } from "../../constants/routes";
import { Table } from "../../components";

const Cart = () => {
	const navigate = useNavigate();
	const { cart } = useContext(CartContext);
	const { data: products, error } = useFetch(`${apiUrl}/api/product`);

	const cartToRender = [];

	cart.forEach((item) => {
		const product = products?.find((i) => i._id === item.productId);
		cartToRender.push({
			name: product?.name,
			size: item.size,
			quantity: item.quantity,
			price: product?.price,
			image: product?.options.find(
				(option) => option.color === item.color
			).img[0],
		});
	});

	if (error) {
		return navigate(`${ERROR}`);
	}

	return (
		<div className="content">
			<Table.Base>
				<Table.Head>
					<Table.Row>
						<Table.Header>PRODUCT</Table.Header>
						<Table.Header></Table.Header>
						<Table.Header>QUANTITY</Table.Header>
						<Table.Header>TOTAL</Table.Header>
						<Table.Header>ACTION</Table.Header>
					</Table.Row>
				</Table.Head>

				<Table.Body>
					{cartToRender.map((product, index) => (
						<Table.Row key={index}>
							<Table.Data>
								<Table.Image
									src={`${apiUrl}/public${product.image}`}
									alt={product.name}
								/>
							</Table.Data>

							<Table.Data style={{ textAlign: "left" }}>
								<Table.Text>{product.name}</Table.Text>
								<Table.Text>{`$${product.price}`}</Table.Text>
								<Table.Text>{`Size: ${product.size}`}</Table.Text>
							</Table.Data>

							<Table.Data>{product.quantity}</Table.Data>

							<Table.Data>
								{`$${(product.price * product.quantity).toFixed(
									2
								)}`}
							</Table.Data>

							<Table.Data>
								<Table.Button>
									<i className="fas fa-times-circle"></i>
								</Table.Button>
							</Table.Data>
						</Table.Row>
					))}
				</Table.Body>
			</Table.Base>
		</div>
	);
};

export default Cart;
