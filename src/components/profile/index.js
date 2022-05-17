import { useState, createContext, useContext } from "react";
import {
	Container,
	Dropdown,
	Name,
	Button,
	Icon,
	Text,
	Link,
} from "./styles/profile.styles";

const ToggleContext = createContext();

const Profile = ({ children, ...restProps }) => {
	const [toggleShow, setToggleShow] = useState(false);

	return (
		<ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
			<Container {...restProps}>{children}</Container>
		</ToggleContext.Provider>
	);
};

Profile.Dropdown = function ProfileDropdown({ children, ...restProps }) {
	const { toggleShow } = useContext(ToggleContext);

	return (
		<Dropdown className={toggleShow ? "open" : "closed"} {...restProps}>
			{children}
		</Dropdown>
	);
};

Profile.Name = function ProfileName({ children, ...restProps }) {
	const { toggleShow, setToggleShow } = useContext(ToggleContext);

	return (
		<Name {...restProps} onClick={() => setToggleShow(!toggleShow)}>
			{children}
		</Name>
	);
};

Profile.Text = function ProfileText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Profile.Button = function ProfileButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Profile.Icon = function ProfileIcon({ children, ...restProps }) {
	return <Icon {...restProps}>{children}</Icon>;
};

Profile.Link = function ProfileLink({ children, ...restProps }) {
	return <Link {...restProps}>{children}</Link>;
};

export default Profile;
