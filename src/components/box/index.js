import { Container, Title, Text, Button } from "./styles/box.styles";

const Box = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Box.Title = function BoxTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Box.Text = function BoxText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Box.Button = function BoxButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

export default Box;
