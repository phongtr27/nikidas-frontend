import { Card } from "../../components";
import { apiUrl, SHOP } from "../../constants/routes";

const CategoryCard = ({ category }) => {
	return (
		<Card.Item to={`${SHOP}/?category=${category.name}`} center={1}>
			<Card.Wrapper>
				<Card.Image
					src={`${apiUrl}/public${category.img}`}
					alt="category"
				/>
			</Card.Wrapper>
			<Card.Name>{category.name}</Card.Name>
		</Card.Item>
	);
};

export default CategoryCard;
