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
		autoplaySpeed: 2000,
	};

	return (
		<Slider {...settings}>
			<BannerContainer url="/images/banners/background_1.jpeg" />
			<BannerContainer url="/images/banners/background_2.jpeg" />
		</Slider>
	);
};

export default BannerSlider;
