import { Card } from "../../components";
import { ProductCard } from "../../containers";

const ProductContainer = ({ products, productLimit, handleLoadMore }) => {
	return (
		<Card>
			<Card.Text style={{ color: "#797f91" }}>
				{`Total: ${products?.length} results`}
			</Card.Text>

			<Card.Grid>
				{products?.slice(0, productLimit).map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</Card.Grid>

			{products?.length > productLimit && (
				<Card.Button onClick={handleLoadMore}>LOAD MORE</Card.Button>
			)}
		</Card>
	);
};

export default ProductContainer;
