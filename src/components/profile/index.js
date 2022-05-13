import { Container, Dropdown, Name, Button } from "./styles/profile.styles";

const Profile = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Profile.Dropdown = function ProfileDropdown({ children, ...restProps }) {
	return <Dropdown {...restProps}>{children}</Dropdown>;
};

Profile.Name = function ProfileName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

Profile.Button = function ProfileButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

export default Profile;
