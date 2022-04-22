import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-image: ${({ bg }) => (bg ? `url(${bg})` : null)};
	background-size: cover;
`;

export const SmallForm = styled.div`
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

export const BigForm = styled.div`
	margin-left: 220px;
	margin-top: 100px;
	width: 83%;
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
	margin-bottom: 20px;
	&:last-of-type {
		margin-bottom: 30px;
	}
	padding: 10px 5px;
	outline-color: #c3820a;
	box-sizing: border-box;
	width: 100%;
	height: 100px;
`;

export const Base = styled.form`
	display: flex;
	flex-direction: column;
`;

export const Label = styled.label`
	margin-bottom: 10px;
`;

export const Input = styled.input`
	margin-bottom: 20px;
	&:last-of-type {
		margin-bottom: 30px;
	}
	padding: 10px 5px;
	outline-color: #c3820a;
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
