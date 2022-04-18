import {
	Container,
	Base,
	Head,
	Body,
	Row,
	Header,
	Data,
	Text,
	Image,
} from "./styles/table.styles";

const Table = ({ children, ...restProps }) => {
	return <Container {...restProps}>{children}</Container>;
};

Table.Base = function TableBase({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

Table.Head = function TableBase({ children, ...restProps }) {
	return <Head {...restProps}>{children}</Head>;
};

Table.Body = function TableBase({ children, ...restProps }) {
	return <Body {...restProps}>{children}</Body>;
};

Table.Row = function TableBase({ children, ...restProps }) {
	return <Row {...restProps}>{children}</Row>;
};

Table.Header = function TableBase({ children, ...restProps }) {
	return <Header {...restProps}>{children}</Header>;
};

Table.Data = function TableBase({ children, ...restProps }) {
	return <Data {...restProps}>{children}</Data>;
};

Table.Text = function TableBase({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Table.Image = function TableBase({ ...restProps }) {
	return <Image {...restProps} />;
};

export default Table;
