import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Container = styled.div`
	padding: 30px 30px 0px 30px;
`;

export const Base = styled.table`
	width: 100%;
	border: 1px solid #8e9194;
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
	background-color: #f5faff;
	padding: 16px;
	border: 1px solid #8e9194;
`;

export const Data = styled.td`
	border: 1px solid #8e9194;
	text-align: center;
	padding: 10px;
	${({ hoverable }) => hoverable && `:hover {background-color: #eeeeee}`}
	${({ active }) => active && { backgroundColor: "#eeeeee" }}
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
`;

export const ReactRouterLink = styled(Link)`
	text-decoration: none;
	color: black;
`;
