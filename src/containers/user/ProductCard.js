import { Card } from "../../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCard = () => {
	const settings = {
		arrows: false,
		dots: false,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	};

	return (
		<Card>
			<Card.Title>New Arrivals</Card.Title>
			<Card.List>
				<Slider {...settings}>
					<Card.Item to="#">
						<Card.Image
							src="/images/banners/background_1.jpeg"
							alt="test"
						/>
						<Card.Name>Product 1</Card.Name>
						<Card.Text>100</Card.Text>
					</Card.Item>

					<Card.Item to="#">
						<Card.Image
							src="/images/banners/background_1.jpeg"
							alt="test"
						/>
						<Card.Name>Product 2</Card.Name>
						<Card.Text>100</Card.Text>
					</Card.Item>

					<Card.Item to="#">
						<Card.Image
							src="/images/banners/background_1.jpeg"
							alt="test"
						/>
						<Card.Name>Product 3</Card.Name>
						<Card.Text>100</Card.Text>
					</Card.Item>

					<Card.Item to="#">
						<Card.Image
							src="/images/banners/background_1.jpeg"
							alt="test"
						/>
						<Card.Name>Product 4</Card.Name>
						<Card.Text>100</Card.Text>
					</Card.Item>

					<Card.Item to="#">
						<Card.Image
							src="/images/banners/background_1.jpeg"
							alt="test"
						/>
						<Card.Name>Product 5</Card.Name>
						<Card.Text>100</Card.Text>
					</Card.Item>
				</Slider>
			</Card.List>
		</Card>
	);
};

export default ProductCard;
