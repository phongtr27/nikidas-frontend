import { useContext } from "react";
import { Navbar } from "../../components";
import { ProfileContainer } from "../../containers";
import { UserContext } from "../../context/user";

const NavBarAdmin = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<Navbar background_color="#6f42c1" color="white">
			<Navbar.Logo to="/" color="white">
				NIKIDAS
			</Navbar.Logo>
			<ProfileContainer user={user} setUser={setUser} />
		</Navbar>
	);
};

export default NavBarAdmin;
