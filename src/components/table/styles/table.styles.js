import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
	padding: 30px 30px 0px 30px;
`;

export const Base = styled.table`
	width: 100%;
	/* border: 1px solid #8e9194; */
	border-collapse: collapse;
`;

export const Title = styled.h2`
	margin: 0;
	margin-bottom: 30px;
	font-weight: 500;
`;

export const Head = styled.thead``;

export const Body = styled.tbody``;

export const Row = styled.tr``;

export const Header = styled.th`
	/* background-color: #f5faff; */
	padding: 16px;
	/* border: 1px solid #8e9194; */
	border-bottom: 0.5px solid #8e9194;
`;

export const Data = styled.td`
	/* border: 1px solid #8e9194; */
	border-bottom: 0.5px solid #8e9194;
	text-align: center;
	padding: 10px;
	${({ hoverable }) => hoverable && `:hover {background-color: #eeeeee}`}
	${({ active }) => active && { backgroundColor: "#eeeeee" }}
	${({ noBorder }) => noBorder && { borderBottom: "none" }}
`;

export const Grid = styled.div`
	display: grid;
	align-items: center;
	justify-content: center;
	grid-template-columns: 100px 150px;
	grid-column-gap: 5px;
`;

export const Text = styled.p``;

export const Image = styled.img`
	width: 80px;
	height: 80px;
	object-fit: cover;
`;

export const Button = styled.span`
	cursor: pointer;
	padding: 5px;

	${({ disable }) => disable && { color: "grey" }}
`;

export const ReactRouterLink = styled(Link)`
	text-decoration: none;
	color: black;
`;

export const BigButton = styled.button`
	display: block;
	margin-left: auto;
	margin-right: auto;
	padding: 15px 20px;
	background-color: white;
	color: black;
	font-weight: 700;
	letter-spacing: 4px;
	border: 1px solid #f0f0f0;
	cursor: pointer;

	:hover {
		transition: 0.5s;
		background-color: black;
		color: white;
		border: 1px solid black;
	}

	:disabled {
		background-color: #d7d2d2;
		border: 1px solid #d7d2d2;
	}
`;
