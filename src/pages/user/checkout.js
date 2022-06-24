import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../context/user";
import { CartContext } from "../../context/cart";
import useFetch from "../../hooks/useFetch";
import { apiUrl, ERROR, SHOP } from "../../constants/routes";
import { CheckoutContainer } from "../../containers";
import { toast } from "react-toastify";
import { Fade } from "react-awesome-reveal";

const Checkout = () => {
	const navigate = useNavigate();
	const { user } = useContext(UserContext);
	const { cart, setCart } = useContext(CartContext);
	const { data: products, error } = useFetch(`${apiUrl}/api/product`);
	const [name, setName] = useState(user?.name || "");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState(user?.email || "");
	const [note, setNote] = useState("");
	const [address, setAddress] = useState(user?.address || "");

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

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (cart.length === 0) {
			toast.warn("No item in cart.");
			return;
		}

		const price = +cartToRender
			.reduce((a, b) => a + +b.price * +b.quantity, 0)
			.toFixed(2);

		const data =
			note.length > 0
				? { name, phone, email, note, address, cart, price }
				: { name, phone, email, address, cart, price };

		try {
			const response = await fetch(`${apiUrl}/api/order`, {
				method: "POST",
				body: JSON.stringify(data),
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});

			const { message } = await response.json();

			if (response.status >= 400) {
				toast.error(message);
				return;
			}

			localStorage.removeItem("cart");
			setCart([]);
			navigate(SHOP);
			toast.success(message);
		} catch (err) {
			toast.error("Internal Server Error.");
		}
	};

	if (error) {
		return navigate(`${ERROR}`);
	}

	return (
		<Fade triggerOnce>
			<CheckoutContainer
				cart={cartToRender}
				name={name}
				setName={setName}
				phone={phone}
				setPhone={setPhone}
				email={email}
				setEmail={setEmail}
				note={note}
				setNote={setNote}
				address={address}
				setAddress={setAddress}
				handleSubmit={handleSubmit}
			/>
		</Fade>
	);
};

export default Checkout;
