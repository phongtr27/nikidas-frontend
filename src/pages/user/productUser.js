import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { apiUrl } from "../../constants/routes";
import { ProductViewContainer } from "../../containers";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";

const ProductUser = () => {
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
			/>
		</Fade>
	);
};

export default ProductUser;
