import { BannerSlider, Category, ProductSlider } from "../../containers";
import useFetch from "../../hooks/useFetch";
import { Fade } from "react-awesome-reveal";
import { apiUrl, ERROR } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	const {
		data: categories,
		error: err1,
		isLoading: isLoading1,
	} = useFetch(`${apiUrl}/api/category`);

	const {
		data: latestProducts,
		error: err2,
		isLoading: isLoading2,
	} = useFetch(`${apiUrl}/api/product/latest`);

	const {
		data: saleProducts,
		error: err3,
		isLoading: isLoading3,
	} = useFetch(`${apiUrl}/api/product/discount`);

	if (err1 || err2 || err3) {
		return navigate(`${ERROR}`);
	}

	return (
		<>
			<Fade triggerOnce>
				<BannerSlider />
			</Fade>

			<Fade triggerOnce>
				<Category categories={categories} isLoading={isLoading1} />
			</Fade>

			<Fade triggerOnce>
				<ProductSlider
					title="NEW ARRIVALS"
					products={latestProducts}
					isLoading={isLoading2}
				/>
			</Fade>

			<Fade triggerOnce>
				<ProductSlider
					title="HOT SALE"
					products={saleProducts}
					isLoading={isLoading3}
				/>
			</Fade>
		</>
	);
};

export default Home;
