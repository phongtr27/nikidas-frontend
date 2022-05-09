import styled from "styled-components/macro";

export const Overlay = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.27);
`;

export const Inner = styled.div`
	border: 1px solid black;
	background-color: white;
	width: 400px;
	height: 200px;
	padding: 30px;
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const Close = styled.button`
	position: absolute;
	right: 5px;
	top: 5px;
	width: 22px;
	height: 22px;
	opacity: 0.3;
	background-color: transparent;
	border: 0;
	cursor: pointer;
	&:hover {
		opacity: 1;
	}
`;

export const Button = styled.button`
	background-color: ${({ bg }) => (bg ? bg : null)};
	width: 115px;
	height: 45px;
	text-transform: uppercase;
	font-weight: bold;
	border: none;
	color: ${({ bg }) => (bg ? "white" : "black")};
	font-size: 16px;
	height: 45px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 0;
	&:hover {
		transform: scale(1.05);
	}
`;

export const GroupButton = styled.div`
	display: flex;
	justify-content: space-between;
`;