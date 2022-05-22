import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	margin-top: 60px;
	padding: 60px;
	background-color: black;
	display: grid;
	grid-template-columns: auto auto auto;
	column-gap: 100px;
`;

export const Item = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Logo = styled(ReactRouterLink)`
	text-decoration: none;
	color: white;
	font-weight: 700;
	font-size: 28px;
	margin-bottom: 20px;
`;

export const Title = styled.h3`
	color: #ffffff;
	font-size: 15px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-bottom: 20px;
`;

export const Text = styled.p`
	color: #b7b7b7;
	font-size: 15px;
	font-weight: 400;
	line-height: 25px;
	margin: 0;
`;

export const Image = styled.img`
	margin-top: 25px;
`;

export const Link = styled(ReactRouterLink)`
	text-decoration: none;
	color: #b7b7b7;
	font-size: 15px;
	font-weight: 400;
	line-height: 25px;

	:hover {
		color: white;
	}
`;
