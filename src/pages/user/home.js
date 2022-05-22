import {
	BannerSlider,
	Category,
	NewArrivals,
	Discount,
} from "../../containers";

const Home = () => {
	return (
		<>
			<BannerSlider />
			<Category />
			<NewArrivals />
			<Discount />
		</>
	);
};

export default Home;
