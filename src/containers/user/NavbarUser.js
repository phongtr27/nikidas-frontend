import { useContext } from "react";
import { Navbar } from "../../components";
import { ProfileContainer } from "../../containers";
import { UserContext } from "../../context/user";
import { LOGIN } from "../../constants/routes";

const NavbarUser = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<Navbar>
			<Navbar.Logo to="/">NIKIDAS</Navbar.Logo>

			<Navbar.Wrapper width="30%">
				<Navbar.Link to="#">Home</Navbar.Link>
				<Navbar.Link to="#">Shop</Navbar.Link>
				<Navbar.Link to="#">Contacts</Navbar.Link>
				<Navbar.Link to="#">Checkout</Navbar.Link>
			</Navbar.Wrapper>

			<Navbar.Wrapper width="126px">
				<Navbar.Link to="#">
					<i className="fas fa-search"></i>
				</Navbar.Link>

				<Navbar.Link to="#">
					<i className="fas fa-shopping-bag"></i>
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
