import { Card } from "../../components";
import { ProductCard } from "../../containers";
import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiUrl } from "../../constants/routes";

const NewArrivals = () => {
	const { data: products } = useFetch(`${apiUrl}/api/product`);

	const settings = {
		arrows: false,
		dots: false,
		speed: 500,
		slidesToShow: products?.length < 4 ? products.length : 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
	};

	return (
		<Card>
			<Card.Title>NEW ARRIVALS</Card.Title>
			<Card.List>
				<Slider {...settings}>
					{products?.map((product) => (
						<ProductCard product={product} />
					))}
				</Slider>
			</Card.List>
		</Card>
	);
};

export default NewArrivals;
