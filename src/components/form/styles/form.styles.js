import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	background-image: ${({ bg }) => (bg ? `url(${bg})` : null)};
	background-size: cover;
`;

export const SmallContainer = styled.div`
	width: 20%;
	height: 355px;
	margin: auto;
	border-color: none;
	padding: 40px;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const BigContainer = styled.div`
	margin-left: 15%;
	margin-top: 55px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const MidContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px;
`;

export const Title = styled.h2`
	margin: 0;
	margin-bottom: 30px;
	font-weight: 500;
`;

export const Text = styled.p`
	text-align: center;
	margin: 0;
`;

export const TextArea = styled.textarea`
	padding: 10px 5px;
	outline-color: #c3820a;
	box-sizing: border-box;
	width: 100%;
	height: 100px;
	margin-bottom: 20px;
`;

export const Base = styled.form`
	width: 35%;
	display: flex;
	flex-direction: column;
`;

export const SigninForm = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	margin-bottom: 10px;
`;

export const Input = styled.input`
	padding: 10px 5px;
	outline-color: #c3820a;
	margin-bottom: 20px;
`;

export const ColorInput = styled.input`
	height: 40px;
	width: 100%;
	margin-bottom: 20px;
`;

export const Button = styled.button`
	margin-bottom: 30px;
	border-radius: 20px;
	padding: 10px 5px;
	border-width: 0;
	background-color: #03a9f3;
	color: #ffffff;
	font-weight: 700;
	font-size: 18px;
	cursor: pointer;

	&:hover {
		background-color: #0682b9;
	}

	&:disabled {
		background-color: #a3bbc6;
	}
`;

export const Link = styled(ReactRouterLink)``;

export const Error = styled.div`
	background-color: red;
	color: white;
	padding: 10px;
	border-radius: 5px;
`;

export const LabelFileInput = styled.label`
	border: 1px solid #767676;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
`;

export const SmallButton = styled.span`
	margin-top: 5px;
	text-align: center;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	margin: 5px;
`;
