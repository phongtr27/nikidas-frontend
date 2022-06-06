import { Card } from "../../components";
import { CategoryCard } from "../../containers";
import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiUrl } from "../../constants/routes";
import { toast } from "react-toastify";

const Category = () => {
	const { data: categories, error } = useFetch(`${apiUrl}/api/category`);

	const settings = {
		arrows: false,
		dots: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		lazyLoad: true,
	};

	if (error) {
		toast.error("Internal Server Error.");
		return;
	}

	return (
		<Card center>
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
