import { Card } from "../../components";
import { apiUrl } from "../../constants/routes";

const CategoryCard = ({ category }) => {
	return (
		<Card.Item to="#" center={1}>
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
