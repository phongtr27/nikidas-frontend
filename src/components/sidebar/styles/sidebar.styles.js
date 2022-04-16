import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	background-color: #edf1f5;
	position: fixed;
	top: 0;
	left: 0;
	height: 100%;
	width: 15%;
`;

export const Logo = styled.img`
	width: 100%;
	margin: 20px auto;
`;

export const LogoAlt = styled.img``;

export const Icon = styled.img`
	margin-left: 25px;
`;

export const Text = styled.p`
	margin-left: 5px;
`;

export const Link = styled(ReactRouterLink)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: black;
`;
