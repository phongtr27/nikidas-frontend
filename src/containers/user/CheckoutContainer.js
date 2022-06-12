import { Box, Form } from "../../components";
import { apiUrl } from "../../constants/routes";

const CheckoutContainer = ({ cart }) => {
	return (
		<div className="content flex">
			<Form.Base width="800px">
				<Form.Title>BILLING DETAILS</Form.Title>

				<Form.Label htmlFor="name">Full Name</Form.Label>
				<Form.Input type="text" name="name" id="name" required />

				<Form.Label htmlFor="phone">Phone</Form.Label>
				<Form.Input type="text" name="phone" id="phone" required />

				<Form.Label htmlFor="email">Email</Form.Label>
				<Form.Input type="text" name="email" id="email" required />

				<Form.Label htmlFor="note">Order Notes</Form.Label>
				<Form.Input type="text" name="note" id="note" />

				<Form.Label htmlFor="address">Address</Form.Label>
				<Form.Input type="text" name="address" id="address" required />
			</Form.Base>

			<Box>
				<Box.Title>ORDER SUMMARY</Box.Title>

				{cart.map((product, index) => (
					<Box.Grid key={index}>
						<Box.Image
							src={
								product.image
									? `${apiUrl}/public${product.image}`
									: `images/misc/alt.jpeg`
							}
							alt={product.name}
						/>

						<div>
							<Box.Text>{product.name}</Box.Text>

							<Box.Text>{`Size: ${product.size}`}</Box.Text>

							<div className="flex">
								<Box.Text>{`Qty: ${product.quantity}`}</Box.Text>
								<Box.Text>
									{`$${(
										product.price * product.quantity
									).toFixed(2)}`}
								</Box.Text>
							</div>
						</div>
					</Box.Grid>
				))}

				<hr />

				<div className="flex">
					<Box.Text>TOTAL</Box.Text>
					<Box.Text color="#e64445" fontWeight="700">
						{`$${cart
							.reduce(
								(a, b) =>
									a + Number(b.price) * Number(b.quantity),
								0
							)
							.toFixed(2)}`}
					</Box.Text>
				</div>

				<Box.Button>PLACE ORDER</Box.Button>
			</Box>
		</div>
	);
};

export default CheckoutContainer;
