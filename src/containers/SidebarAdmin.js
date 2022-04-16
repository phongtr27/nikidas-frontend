import { Sidebar } from "../components";

const SidebarAdmin = () => {
	return (
		<Sidebar>
			<Sidebar.Logo src="/images/logos/nikidas.png" alt="logo" to="/" />
			<Sidebar.Link to="/">
				<Sidebar.Text>
					<i class="fas fa-chart-line"></i> Dashboard
				</Sidebar.Text>
			</Sidebar.Link>
		</Sidebar>
	);
};

export default SidebarAdmin;
