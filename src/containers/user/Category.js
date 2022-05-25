import { Card } from "../../components";
import { CategoryCard } from "../../containers";
import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiUrl } from "../../constants/routes";

const Category = () => {
	const { data: categories } = useFetch(`${apiUrl}/api/category`);

	const settings = {
		arrows: false,
		dots: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		lazyLoad: true,
	};

	return (
		<Card>
			<Card.Title>WHAT DO YOU FANCY?</Card.Title>
			<Card.List>
				<Slider {...settings}>
					{categories?.map((category, index) => (
						<CategoryCard key={index} category={category} />
					))}
				</Slider>
			</Card.List>
		</Card>
	);
};

export default Category;
