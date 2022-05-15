import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	box-shadow: 1px 0 20px rgb(0 0 0 / 8%);
	position: fixed;
	top: 60px;
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
	color: ${({ active }) => (active ? "#6f42c1" : "#797f91")};
	padding-left: 30px;
	&:hover {
		color: #6f42c1;
	}
`;

export const Dropdown = styled.div`
	padding-left: 30px;
	cursor: pointer;
`;

export const DropdownHeader = styled.div`
	display: flex;
	align-items: center;
	color: ${({ active }) => (active ? "#6f42c1" : "#797f91")};

	&:hover {
		color: #6f42c1;
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
