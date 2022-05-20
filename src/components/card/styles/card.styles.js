import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	padding-top: 60px;
	padding-left: 60px;
	padding-right: 60px;
	text-align: center;
`;

export const Title = styled.h3`
	color: #e53637;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 2px;
	margin-bottom: 40px;
`;

export const List = styled.div``;

export const Item = styled.div`
	padding-left: 5px;
	padding-right: 5px;
	text-align: left;
`;

export const Name = styled.h5`
	margin-bottom: 10px;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	margin-left: auto;
	margin-right: auto;
	object-fit: contain;
	transition: 0.5s;

	&:hover {
		transform: scale(1.1);
	}
`;

export const Link = styled(ReactRouterLink)`
	text-decoration: none;
	color: black;
`;

export const Text = styled.p`
	margin-top: 0;
`;
