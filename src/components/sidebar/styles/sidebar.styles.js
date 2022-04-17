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

export const Icon = styled.i`
	margin-right: 10px;
`;

export const Text = styled.p``;

export const Link = styled(ReactRouterLink)`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: ${({ active }) => (active ? "black" : "#8b91a0")};
	padding-left: 30px;
	&:hover {
		color: black;
	}
`;

export const Dropdown = styled.div`
	padding-left: 30px;
	cursor: pointer;
`;

export const DropdownHeader = styled.div`
	display: flex;
	align-items: center;
	color: ${({ active }) => (active ? "black" : "#8b91a0")};

	&:hover {
		color: black;
	}
`;

export const DropdownMenu = styled.div`
	&.closed {
		visibility: hidden;
		height: 0;
	}
	&.open {
	}
`;
