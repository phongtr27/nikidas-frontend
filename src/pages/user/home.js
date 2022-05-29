import {
	BannerSlider,
	Category,
	NewArrivals,
	Discount,
} from "../../containers";
import Fade from "react-reveal/Fade";

const Home = () => {
	return (
		<>
			<Fade>
				<BannerSlider />
			</Fade>

			<Fade>
				<Category />
			</Fade>

			<Fade>
				<NewArrivals />
			</Fade>

			<Fade>
				<Discount />
			</Fade>
		</>
	);
};

export default Home;
