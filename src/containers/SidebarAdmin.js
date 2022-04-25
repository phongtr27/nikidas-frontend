import { Sidebar } from "../components";
import { useLocation } from "react-router-dom";
import {
	ADMIN,
	ADMIN_CATEGORY,
	ADMIN_SUB_CATEGORY,
	ADMIN_PRODUCT,
	ADMIN_ORDER,
} from "../constants/routes";

const SidebarAdmin = () => {
	const { pathname } = useLocation();

	return (
		<Sidebar>
			<Sidebar.Logo src="/images/logos/nikidas.png" alt="logo" to="/" />

			<Sidebar.Link to={ADMIN} active={pathname === ADMIN ? 1 : 0}>
				<Sidebar.Icon className="fas fa-chart-line" />
				<Sidebar.Text>Dashboard</Sidebar.Text>
			</Sidebar.Link>

			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader
					active={pathname.includes("category") ? 1 : 0}
				>
					<Sidebar.Icon className="fas fa-th-large" />
					<Sidebar.Text>Categories</Sidebar.Text>
				</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu>
					<Sidebar.Link
						to={ADMIN_CATEGORY}
						active={pathname === ADMIN_CATEGORY ? 1 : 0}
					>
						<Sidebar.Text>All Categories</Sidebar.Text>
					</Sidebar.Link>

					<Sidebar.Link
						to={`${ADMIN_CATEGORY}/new`}
						active={pathname === `${ADMIN_CATEGORY}/new` ? 1 : 0}
					>
						<Sidebar.Text>New Category</Sidebar.Text>
					</Sidebar.Link>

					<Sidebar.Link
						to={ADMIN_SUB_CATEGORY}
						active={pathname === ADMIN_SUB_CATEGORY ? 1 : 0}
					>
						<Sidebar.Text>All Sub-Category</Sidebar.Text>
					</Sidebar.Link>

					<Sidebar.Link
						to={`${ADMIN_SUB_CATEGORY}/new`}
						active={
							pathname === `${ADMIN_SUB_CATEGORY}/new` ? 1 : 0
						}
					>
						<Sidebar.Text>New Sub-Category</Sidebar.Text>
					</Sidebar.Link>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Dropdown>
				<Sidebar.DropdownHeader
					active={pathname.includes("/product") ? 1 : 0}
				>
					<Sidebar.Icon className="far fa-shopping-cart" />
					<Sidebar.Text>Products</Sidebar.Text>
				</Sidebar.DropdownHeader>

				<Sidebar.DropdownMenu>
					<Sidebar.Link
						to={ADMIN_PRODUCT}
						active={pathname === ADMIN_PRODUCT ? 1 : 0}
					>
						<Sidebar.Text>All Products</Sidebar.Text>
					</Sidebar.Link>

					<Sidebar.Link
						to={`${ADMIN_PRODUCT}/new`}
						active={pathname === `${ADMIN_PRODUCT}/new` ? 1 : 0}
					>
						<Sidebar.Text>New Product</Sidebar.Text>
					</Sidebar.Link>
				</Sidebar.DropdownMenu>
			</Sidebar.Dropdown>

			<Sidebar.Link
				to={ADMIN_ORDER}
				active={pathname === ADMIN_ORDER ? 1 : 0}
			>
				<Sidebar.Icon className="fas fa-bags-shopping" />
				<Sidebar.Text>Orders</Sidebar.Text>
			</Sidebar.Link>
		</Sidebar>
	);
};

export default SidebarAdmin;
