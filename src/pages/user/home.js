import { BannerSlider, Category, ProductSlider } from "../../containers";
import useFetch from "../../hooks/useFetch";
import { Fade } from "react-awesome-reveal";
import { apiUrl, ERROR } from "../../constants/routes";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();
	const { data: latestProducts, error: err1 } = useFetch(
		`${apiUrl}/api/product/latest`
	);
	const { data: saleProducts, error: err2 } = useFetch(
		`${apiUrl}/api/product/discount`
	);

	if (err1 || err2) {
		return navigate(`${ERROR}`);
	}

	return (
		<>
			<Fade triggerOnce>
				<BannerSlider />
			</Fade>

			<Fade triggerOnce>
				<Category />
			</Fade>

			<Fade triggerOnce>
				<ProductSlider title="NEW ARRIVALS" products={latestProducts} />
			</Fade>

			<Fade triggerOnce>
				<ProductSlider title="HOT SALE" products={saleProducts} />
			</Fade>
		</>
	);
};

export default Home;
