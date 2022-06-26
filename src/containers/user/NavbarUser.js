import { useContext, useState, useEffect } from "react";
import {
	NavbarUserContainer,
	SearchModal,
	SidebarModalUser,
} from "../../containers";
import { UserContext } from "../../context/user";
import { CartContext } from "../../context/cart";
import { useLocation } from "react-router-dom";
import useWidth from "../../hooks/useWidth";

const NavbarUser = () => {
	const { pathname } = useLocation();
	const { user, setUser } = useContext(UserContext);
	const { cart } = useContext(CartContext);
	const [showSidebarModal, setShowSidebarModal] = useState(false);
	const [showSearchModal, setShowSearchModal] = useState(false);
	const { width } = useWidth();

	useEffect(() => {
		setShowSearchModal(false);
		setShowSidebarModal(false);
	}, [pathname]);

	const handleLogout = () => {
		localStorage.removeItem("token");
		setUser(null);
	};

	return (
		<div>
			<NavbarUserContainer
				pathname={pathname}
				cart={cart}
				user={user}
				setUser={setUser}
				setShowSearchModal={setShowSearchModal}
				setShowSidebarModal={setShowSidebarModal}
				width={width}
			/>

			<SearchModal
				showSearchModal={showSearchModal}
				setShowSearchModal={setShowSearchModal}
			/>

			{width <= 768 && (
				<SidebarModalUser
					pathname={pathname}
					cart={cart}
					user={user}
					setShowSearchModal={setShowSearchModal}
					showSidebarModal={showSidebarModal}
					setShowSidebarModal={setShowSidebarModal}
					handleLogout={handleLogout}
				/>
			)}
		</div>
	);
};

export default NavbarUser;
