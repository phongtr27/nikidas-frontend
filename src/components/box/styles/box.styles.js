import styled from "styled-components/macro";

export const Container = styled.div`
	min-width: 300px;
	padding: 16px;
`;

export const Title = styled.h6`
	font-size: 16px;
	margin-top: 0;
	margin-bottom: 12px;
`;

export const Text = styled.p``;

export const Button = styled.button`
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding: 15px 20px;
	background-color: black;
	color: white;
	font-weight: 700;
	letter-spacing: 4px;
	border: 1px solid black;
	cursor: pointer;

	:hover {
		transition: 0.5s;
		background-color: #f6aa8d;
		color: white;
		border: 1px solid #f6aa8d;
	}

	:disabled {
		background-color: #d7d2d2;
		border: 1px solid #d7d2d2;
	}
`;
