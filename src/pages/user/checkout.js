import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart";
import useFetch from "../../hooks/useFetch";
import { apiUrl, ERROR } from "../../constants/routes";
import { CheckoutContainer } from "../../containers";
import { Fade } from "react-awesome-reveal";

const Checkout = () => {
	const navigate = useNavigate();
	const { cart } = useContext(CartContext);
	const { data: products, error } = useFetch(`${apiUrl}/api/product`);

	const cartToRender = [];

	cart.forEach((item) => {
		const product = products?.find((i) => i._id === item.productId);
		cartToRender.push({
			name: product?.name,
			size: item.size,
			quantity: item.quantity,
			price: (product?.price * (1 - product?.discount / 100)).toFixed(2),
			image: product?.options.find(
				(option) => option.color === item.color
			).img[0],
		});
	});

	if (error) {
		return navigate(`${ERROR}`);
	}

	return (
		<Fade triggerOnce>
			<CheckoutContainer cart={cartToRender} />
		</Fade>
	);
};

export default Checkout;
