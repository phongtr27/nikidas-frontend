import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Container = styled.div`
	padding-top: 60px;
	padding-left: 60px;
	padding-right: 60px;
	text-align: center;
	position: relative;
`;

export const Title = styled.h3`
	color: #e53637;
	font-size: 14px;
	font-weight: 700;
	letter-spacing: 2px;
	margin-bottom: 40px;
`;

export const List = styled.div``;

export const Grid = styled.div`
	display: grid;
	grid-template-columns: 340px 340px 340px;
	column-gap: 20px;
	row-gap: 20px;
`;

export const Item = styled(ReactRouterLink)`
	display: inline-block;
	text-decoration: none;
	color: black;
	padding-left: 3px;
	padding-right: 3px;
	text-align: ${({ center }) => (center ? "center" : "left")};
`;

export const Name = styled.h5`
	margin-bottom: 10px;
	cursor: pointer;
`;

export const Image = styled.img`
	width: 100%;
	/* min-height: 400px; */
	/* max-height: 482px; */
	height: 400px;
	margin-left: auto;
	margin-right: auto;
	object-fit: cover;
	transition: 0.5s;

	&:hover {
		transform: scale(1.1);
		opacity: 0.7;
	}
`;

export const Wrapper = styled.div`
	overflow: hidden;
	position: relative;
`;

export const Text = styled.p`
	margin-top: 0;
	font-size: 14px;
	position: relative;
`;

export const Tag = styled.span`
	padding: 5px 10px;
	background-color: black;
	color: white;
	font-size: 11px;
	letter-spacing: 2px;
	position: absolute;
	left: 0;
	top: 30px;
`;

export const SubText = styled.span`
	position: absolute;
	left: 60px;
	text-decoration: line-through;
	font-size: 14px;
	font-weight: lighter;
	margin-left: 5px;
	color: #848484;
`;

export const PrevButton = styled.i`
	position: absolute;
	left: 10px;
	top: 50%;
	cursor: pointer;
`;

export const NextButton = styled.i`
	position: absolute;
	right: 10px;
	top: 50%;
	cursor: pointer;
`;
