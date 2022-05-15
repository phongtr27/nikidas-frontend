import { Container, Logo, Wrapper, Link } from "./styles/navbar.styles";

const Navbar = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Navbar.Logo = function NavbarLogo({ children, ...restProps }) {
	return <Logo {...restProps}>{children}</Logo>;
};

Navbar.Wrapper = function NavbarWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Navbar.Link = function NavbarLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

export default Navbar;
