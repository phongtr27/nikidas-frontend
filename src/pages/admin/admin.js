import { SidebarAdmin } from "../../containers";

const Admin = ({ children }) => {
	return (
		<>
			<SidebarAdmin />
			{children}
		</>
	);
};

export default Admin;
