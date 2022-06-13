import { Table, Card } from "../../components";
import { addQuantity, subtractQuantity } from "../../helpers/updateCart";
import { apiUrl } from "../../constants/routes";

const CartTable = ({
	cart,
	setCart,
	handleDeleteItem,
	continueShopping,
	proceedToCheckout,
}) => {
	return (
		<div className="content flex">
			<Table.Base>
				<Table.Head>
					<Table.Row>
						<Table.Header>PRODUCT</Table.Header>
						<Table.Header>QUANTITY</Table.Header>
						<Table.Header>TOTAL</Table.Header>
						<Table.Header>ACTION</Table.Header>
					</Table.Row>
				</Table.Head>

				<Table.Body>
					{cart.map((product, index) => (
						<Table.Row key={index}>
							<Table.Data>
								<Table.Grid>
									<Table.Image
										src={
											product.image
												? `${apiUrl}/public${product.image}`
												: `images/misc/alt.jpeg`
										}
										alt={product.name}
									/>
									<div style={{ textAlign: "left" }}>
										<Table.Text>{product.name}</Table.Text>
										<Table.Text>
											{`$${product.price}`}
										</Table.Text>
										<Table.Text>{`Size: ${product.size}`}</Table.Text>
									</div>
								</Table.Grid>
							</Table.Data>
							{console.log(+product.quantity === 1)}
							<Table.Data>
								<Table.Button
									onClick={() =>
										subtractQuantity(index, setCart)
									}
									disable={product.quantity === 1}
								>
									<i className="fas fa-minus-square"></i>
								</Table.Button>{" "}
								{product.quantity}{" "}
								<Table.Button
									onClick={() => addQuantity(index, setCart)}
								>
									<i className="fas fa-plus-square"></i>
								</Table.Button>
							</Table.Data>

							<Table.Data>
								{`$${(product.price * product.quantity).toFixed(
									2
								)}`}
							</Table.Data>

							<Table.Data>
								<Table.Button
									onClick={() => handleDeleteItem(index)}
								>
									<i className="fas fa-times-circle"></i>
								</Table.Button>
							</Table.Data>
						</Table.Row>
					))}

					<Table.Row>
						<Table.Data noBorder>
							<Table.BigButton onClick={continueShopping}>
								CONTINUE SHOPPING
							</Table.BigButton>
						</Table.Data>

						<Table.Data noBorder>TOTAL</Table.Data>

						<Table.Data noBorder>
							{`$${cart
								.reduce(
									(a, b) =>
										a +
										Number(b.price) * Number(b.quantity),
									0
								)
								.toFixed(2)}`}
						</Table.Data>

						<Table.Data noBorder>
							<Card.Button
								style={{ marginTop: 0 }}
								onClick={proceedToCheckout}
							>
								PROCEED TO CHECKOUT
							</Card.Button>
						</Table.Data>
					</Table.Row>
				</Table.Body>
			</Table.Base>
		</div>
	);
};

export default CartTable;
