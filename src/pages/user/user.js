import { NavbarUser, FooterContainer } from "../../containers";

const User = ({ children }) => {
	return (
		<>
			<NavbarUser />
			{children}
			<FooterContainer />
		</>
	);
};

export default User;
