import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	padding-left: 60px;
	padding-right: 60px;
`;

export const Title = styled.h3``;

export const List = styled.div``;

export const Item = styled(ReactRouterLink)``;

export const Name = styled.h6``;

export const Image = styled.img`
	width: 95%;
	height: 260px;
	margin-left: auto;
	margin-right: auto;
	object-fit: cover;
`;

export const Text = styled.p``;
