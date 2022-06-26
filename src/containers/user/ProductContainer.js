import { Card } from "../../components";
import { ProductCard } from "../../containers";

const ProductContainer = ({
	width,
	products,
	productLimit,
	onLoadMore,
	setShowFilterModal,
}) => {
	return (
		<Card width="100%">
			<div className="flex">
				<Card.Text style={{ color: "#797f91" }}>
					{`Total: ${products?.length} results`}
				</Card.Text>

				{width <= 768 && (
					<Card.Text
						style={{ color: "#797f91", cursor: "pointer" }}
						onClick={() => setShowFilterModal(true)}
					>
						<i className="fas fa-filter"></i> Show/Hide Filter
					</Card.Text>
				)}
			</div>

			<Card.Grid>
				{products?.slice(0, productLimit).map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</Card.Grid>

			{products?.length > productLimit && (
				<Card.Button onClick={onLoadMore}>LOAD MORE</Card.Button>
			)}
		</Card>
	);
};

export default ProductContainer;
