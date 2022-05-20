import { Card } from "../../components";
import { apiUrl } from "../../constants/routes";

const ProductCard = ({ product }) => {
	return (
		<Card.Item to="#">
			<Card.Image
				src={`${apiUrl}/public${product.options[0].img[0]}`}
				alt="product"
			/>
			<Card.Name>{product.name}</Card.Name>
			<Card.Text>{product.price}</Card.Text>
		</Card.Item>
	);
};

export default ProductCard;
