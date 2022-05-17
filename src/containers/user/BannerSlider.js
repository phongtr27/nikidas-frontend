import { useRef } from "react";
import { Banner } from "../../components";
import BannerContainer from "./BannerContainer";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BannerSlider = () => {
	const settings = {
		infinite: true,
		arrows: false,
		dots: false,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
	};

	const sliderRef = useRef();

	const goToNext = () => {
		sliderRef.current.slickNext();
	};

	const goToPrevious = () => {
		sliderRef.current.slickPrev();
	};

	return (
		<>
			<Slider {...settings} ref={sliderRef}>
				<BannerContainer url="/images/banners/background_1.jpeg" />
				<BannerContainer url="/images/banners/background_2.jpeg" />
			</Slider>

			<Banner.PrevButton
				className="fas fa-chevron-left"
				onClick={goToPrevious}
			/>
			<Banner.NextButton
				className="fas fa-chevron-right"
				onClick={goToNext}
			/>
		</>
	);
};

export default BannerSlider;
