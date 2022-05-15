import { NavbarUser } from "../../containers";

const User = ({ children }) => {
	return (
		<>
			<NavbarUser />
			{children}
		</>
	);
};

export default User;
