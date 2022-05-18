import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	${({ sticky }) => sticky && `z-index: 999; position: sticky; top: 0; `}
	width: 100%;
	height: 60px;
	color: ${({ color }) => (color ? color : "black")};
	background-color: ${({ background_color }) =>
		background_color ? background_color : "white"};
	display: flex;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	padding-left: ${({ side_padding }) =>
		side_padding ? side_padding : "30px"};
	padding-right: ${({ side_padding }) =>
		side_padding ? side_padding : "30px"};
`;

export const Logo = styled(ReactRouterLink)`
	text-decoration: none;
	color: ${({ color }) => (color ? color : "black")};
	font-weight: 700;
	font-size: 28px;
`;

export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: ${({ width }) => width ?? width};
`;

export const Link = styled(ReactRouterLink)`
	text-decoration: none;
	color: black;
`;
