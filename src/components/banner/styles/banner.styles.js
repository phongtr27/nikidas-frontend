import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	margin-top: 60px;
	height: 800px;
	background-image: url(${({ url }) => url && url});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: top center;
`;

export const Content = styled.div`
	padding-top: 230px;
	padding-left: 30px;
	width: 40%;
`;

export const Title = styled.h2`
	color: #111111;
	font-size: 48px;
	font-weight: 700;
	line-height: 58px;
	margin-bottom: 30px;
`;

export const Text = styled.p`
	font-size: 16px;
	line-height: 28px;
	margin-bottom: 35px;
`;

export const SmallTitle = styled.h6`
	color: #e53637;
	font-size: 14px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 2px;
	margin-bottom: 28px;
`;

export const Button = styled(ReactRouterLink)`
	text-decoration: none;
	border: 1px solid black;
	font-size: 13px;
	font-weight: 700;
	text-transform: uppercase;
	padding: 14px 30px;
	color: #ffffff;
	background: #000000;
	letter-spacing: 3px;
`;
