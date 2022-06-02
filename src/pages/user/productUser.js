import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { apiUrl } from "../../constants/routes";
import { ProductViewContainer } from "../../containers";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";
import { CartContext } from "../../context/cart";
import { addToCart } from "../../helpers/addToCart";

const ProductUser = () => {
	const { cart, setCart } = useContext(CartContext);
	const navigate = useNavigate();
	const { id } = useParams();
	const { data: product, error } = useFetch(`${apiUrl}/api/product/${id}`);
	const [option, setOption] = useState(0);
	const [size, setSize] = useState(null);
	const [quantity, setQuantity] = useState("1");

	const handleOptionChange = (index) => {
		setOption(index);
		setSize(null);
		setQuantity(1);
	};

	const handleAddToCart = (productId, color, size, quantity) => {
		addToCart(productId, color, size, quantity);
		const item = { productId, color, size, quantity };
		setCart([...cart, item]);
	};

	if (error) {
		if (error.status >= 400) {
			navigate("/not-found");
		} else {
			toast.error("Internal Server Error.");
		}
	}

	return (
		<Fade triggerOnce>
			<ProductViewContainer
				product={product}
				optionIndex={option}
				handleOptionChange={handleOptionChange}
				size={size}
				handleSizeChange={setSize}
				quantity={quantity}
				handleQuantityChange={setQuantity}
				handleAddToCart={handleAddToCart}
			/>
		</Fade>
	);
};

export default ProductUser;
