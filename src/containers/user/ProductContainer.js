import { Card } from "../../components";
import { ProductCard } from "../../containers";

const ProductContainer = ({ products }) => {
	return (
		<Card>
			<Card.Grid>
				{products?.map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</Card.Grid>
		</Card>
	);
};

export default ProductContainer;
