import {
	Container,
	List,
	Item,
	Name,
	Image,
	Title,
	Text,
} from "./styles/card.styles";

const Card = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Card.Image = function CardImage({ ...restProps }) {
	return <Image {...restProps} />;
};

Card.Title = function CardTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Card.Text = function CardText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Card.List = function CardList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Card.Item = function CardItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Card.Name = function CardName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

export default Card;
