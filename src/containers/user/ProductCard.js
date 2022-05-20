import { Card } from "../../components";
import { apiUrl } from "../../constants/routes";

const ProductCard = ({ product }) => {
	return (
		<Card.Item>
			<Card.Link to="#">
				<Card.Image
					src={`${apiUrl}/public${product.options[0].img[1]}`}
					alt="product"
				/>
			</Card.Link>
			<Card.Name>{product.name}</Card.Name>
			<Card.Text>{`$${product.price}`}</Card.Text>
		</Card.Item>
	);
};

export default ProductCard;
