import React from "react";
import {
	Container,
	SmallForm,
	Text,
	Base,
	Input,
	Button,
	Link,
	Error,
	Title,
} from "./styles/form.styles";

export default function Form({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormText({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Form.SmallForm = function FormFeature({ children, ...restProps }) {
	return <SmallForm {...restProps}>{children}</SmallForm>;
};

Form.Base = function FormFeature({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

Form.Input = function FormInput({ children, ...restProps }) {
	return <Input {...restProps}>{children}</Input>;
};

Form.Button = function FormButton({ children, ...restProps }) {
	return <Button {...restProps}>{children}</Button>;
};

Form.Link = function FormLink({ to, children, ...restProps }) {
	return (
		<Link to={to} {...restProps}>
			{children}
		</Link>
	);
};

Form.Error = function FormError({ children, ...restProps }) {
	return <Error {...restProps}>{children}</Error>;
};
