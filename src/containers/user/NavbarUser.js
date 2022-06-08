import { useContext } from "react";
import { Navbar } from "../../components";
import { ProfileContainer } from "../../containers";
import { UserContext } from "../../context/user";
import { LOGIN, HOME, SHOP, CONTACT, CART } from "../../constants/routes";
import { CartContext } from "../../context/cart";

const NavbarUser = () => {
	const { user, setUser } = useContext(UserContext);
	const { cart } = useContext(CartContext);

	return (
		<Navbar side_padding="60px">
			<Navbar.Logo to="/">NIKIDAS</Navbar.Logo>

			<Navbar.Wrapper width="30%">
				<Navbar.Link to={HOME}>Home</Navbar.Link>
				<Navbar.Link to={SHOP}>Shop</Navbar.Link>
				<Navbar.Link to={CONTACT}>Contact Us</Navbar.Link>
				<Navbar.Link to="#">Checkout</Navbar.Link>
			</Navbar.Wrapper>

			<Navbar.Wrapper width="126px">
				<Navbar.Link to="#">
					<i className="fas fa-search"></i>
				</Navbar.Link>

				<Navbar.Link to={CART}>
					<i className="fas fa-shopping-bag"></i>
					<Navbar.Tag>{cart.length}</Navbar.Tag>
				</Navbar.Link>

				{user ? (
					<ProfileContainer user={user} setUser={setUser} />
				) : (
					<Navbar.Link to={LOGIN}>Log In</Navbar.Link>
				)}
			</Navbar.Wrapper>
		</Navbar>
	);
};

export default NavbarUser;
