import {
	BannerSlider,
	Category,
	NewArrivals,
	Discount,
} from "../../containers";
import { Fade } from "react-awesome-reveal";

const Home = () => {
	return (
		<>
			<Fade triggerOnce>
				<BannerSlider />
			</Fade>

			<Fade triggerOnce>
				<Category />
			</Fade>

			<Fade triggerOnce>
				<NewArrivals />
			</Fade>

			<Fade triggerOnce>
				<Discount />
			</Fade>
		</>
	);
};

export default Home;
