import {
	Container,
	List,
	Item,
	Name,
	Image,
	Title,
	Text,
	SubText,
	Wrapper,
	Tag,
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

Card.SubText = function CardSubText({ children, ...restProps }) {
	return <SubText {...restProps}>{children}</SubText>;
};

Card.List = function CardList({ children, ...restProps }) {
	return <List {...restProps}>{children}</List>;
};

Card.Wrapper = function CardWrapper({ children, ...restProps }) {
	return <Wrapper {...restProps}>{children}</Wrapper>;
};

Card.Item = function CardItem({ children, ...restProps }) {
	return <Item {...restProps}>{children}</Item>;
};

Card.Name = function CardName({ children, ...restProps }) {
	return <Name {...restProps}>{children}</Name>;
};

Card.Tag = function CardTag({ children, ...restProps }) {
	return <Tag {...restProps}>{children}</Tag>;
};

export default Card;
