import { useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar } from "../../components";
import { ProfileContainer } from "../../containers";
import { UserContext } from "../../context/user";
import SidebarModalAdmin from "./SidebarModalAdmin";

const NavBarAdmin = () => {
	const { pathname } = useLocation();
	const { user, setUser } = useContext(UserContext);
	const [showSidebarModal, setShowSidebarModal] = useState(false);
	const [width, setWidth] = useState(window.innerWidth);

	useEffect(() => {
		setShowSidebarModal(false);
	}, [pathname]);

	useEffect(() => {
		window.addEventListener("resize", () => setWidth(window.innerWidth));
		return () =>
			window.removeEventListener("resize", () =>
				setWidth(window.innerWidth)
			);
	}, [width]);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser(null);
	};

	return (
		<>
			<Navbar background_color="#794aff" color="white" sticky={true}>
				<Navbar.Logo to="/" color="white">
					NIKIDAS
				</Navbar.Logo>

				{width > 768 && (
					<ProfileContainer user={user} setUser={setUser} />
				)}

				{width <= 768 && (
					<Navbar.Button
						onClick={() => setShowSidebarModal(!showSidebarModal)}
					>
						<i className="fas fa-bars"></i>
					</Navbar.Button>
				)}
			</Navbar>

			{width <= 768 && (
				<SidebarModalAdmin
					showSidebarModal={showSidebarModal}
					setShowSidebarModal={setShowSidebarModal}
					pathname={pathname}
					handleLogout={handleLogout}
				/>
			)}
		</>
	);
};

export default NavBarAdmin;
