import { useRef } from "react";
import { Card } from "../../components";
import { ProductCard } from "../../containers";
import useFetch from "../../hooks/useFetch";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { apiUrl } from "../../constants/routes";
import { toast } from "react-toastify";

const NewArrivals = () => {
	const { data: products, error } = useFetch(`${apiUrl}/api/product/latest`);

	const settings = {
		arrows: false,
		dots: false,
		speed: 500,
		slidesToShow: products?.length < 4 ? products.length : 4,
		slidesToScroll: 1,
	};

	const sliderRef = useRef();

	const goToNext = () => {
		sliderRef.current.slickNext();
	};

	const goToPrevious = () => {
		sliderRef.current.slickPrev();
	};

	if (error) {
		toast.error("Internal Server Error.");
	}

	return (
		<Card center>
			<Card.Title>NEW ARRIVALS</Card.Title>

			<Card.List>
				<Slider {...settings} ref={sliderRef}>
					{products?.map((product, index) => (
						<ProductCard key={index} product={product} />
					))}
				</Slider>
			</Card.List>

			<Card.PrevButton
				className="fas fa-chevron-left"
				onClick={goToPrevious}
			/>

			<Card.NextButton
				className="fas fa-chevron-right"
				onClick={goToNext}
			/>
		</Card>
	);
};

export default NewArrivals;
