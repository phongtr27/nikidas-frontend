import { useState } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { apiUrl } from "../../constants/routes";
import { ProductViewContainer } from "../../containers";

const ProductUser = () => {
	const { id } = useParams();
	const { data: product } = useFetch(`${apiUrl}/api/product/${id}`);
	const [option, setOption] = useState(0);

	return (
		<ProductViewContainer
			product={product}
			option={option}
			setOption={setOption}
		/>
	);
};

export default ProductUser;
