import { useState, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { apiUrl, ERROR } from "../../constants/routes";
import { ProductViewContainer } from "../../containers";
import { Fade } from "react-awesome-reveal";
import { CartContext } from "../../context/cart";
import { addToCart } from "../../helpers/addToCart";

const ProductUser = () => {
	const { setCart } = useContext(CartContext);
	const navigate = useNavigate();
	const { id } = useParams();
	const { data: product, error } = useFetch(`${apiUrl}/api/product/${id}`);
	const [option, setOption] = useState(0);
	const [size, setSize] = useState(null);
	const [quantity, setQuantity] = useState(1);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));

		return () =>
			window.removeEventListener("resize", () =>
				setWidth(window.innerWidth)
			);
	}, [width]);

	const handleOptionChange = (index) => {
		setOption(index);
		setSize(null);
		setQuantity(1);
	};

	const handleAddToCart = (productId, color, size, quantity) => {
		addToCart(productId, color, size, quantity, setCart);
	};

	if (error) {
		if (error.status >= 400) {
			return navigate("/not-found");
		} else {
			return navigate(`${ERROR}`);
		}
	}

	return (
		<Fade>
			<ProductViewContainer
				product={product}
				optionIndex={option}
				handleOptionChange={handleOptionChange}
				size={size}
				handleSizeChange={setSize}
				quantity={quantity}
				handleQuantityChange={setQuantity}
				handleAddToCart={handleAddToCart}
				width={width}
			/>
		</Fade>
	);
};

export default ProductUser;
