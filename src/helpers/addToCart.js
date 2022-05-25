import { toast } from "react-toastify";

export const addToCart = (productId, color, size, quantity) => {
	const data = { productId, color, size, quantity };

	const cart = JSON.parse(localStorage.getItem("cart"));

	if (!cart) {
		localStorage.setItem("cart", JSON.stringify([data]));
		toast.success("Added to cart.");
		return;
	}

	cart.push(data);
	localStorage.setItem("cart", JSON.stringify(cart));
	toast.success("Added to cart.");
};
