import React from "react";
import {
	Container,
	SmallForm,
	BigForm,
	MidForm,
	Text,
	TextArea,
	Base,
	Label,
	Input,
	Button,
	Link,
	Error,
	Title,
	LabelFileInput,
	LabelColorInput,
} from "./styles/form.styles";

export default function Form({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
}

Form.Title = function FormTitle({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};

Form.Text = function FormText({ children, ...restProps }) {
	return <Text {...restProps}>{children}</Text>;
};

Form.TextArea = function FormTextArea({ children, ...restProps }) {
	return <TextArea {...restProps}>{children}</TextArea>;
};

Form.SmallForm = function FormSmall({ children, ...restProps }) {
	return <SmallForm {...restProps}>{children}</SmallForm>;
};

Form.BigForm = function FormBig({ children, ...restProps }) {
	return <BigForm {...restProps}>{children}</BigForm>;
};

Form.MidForm = function FormMid({ children, ...restProps }) {
	return <MidForm {...restProps}>{children}</MidForm>;
};

Form.Base = function FormBase({ children, ...restProps }) {
	return <Base {...restProps}>{children}</Base>;
};

Form.Label = function FormLabel({ children, ...restProps }) {
	return <Label {...restProps}>{children}</Label>;
};

Form.FileInput = function FormFileInput({ children, ...restProps }) {
	return (
		<LabelFileInput>
			{children}
			<input {...restProps} style={{ display: "none" }} />
		</LabelFileInput>
	);
};

Form.ColorInput = function FormColorInput({ ...restProps }) {
	return (
		<LabelColorInput>
			<input {...restProps} style={{ display: "none" }} />
		</LabelColorInput>
	);
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
