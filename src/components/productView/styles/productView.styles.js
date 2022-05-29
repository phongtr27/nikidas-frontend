import styled from "styled-components/macro";

export const Container = styled.div`
	padding: 60px 60px 0px 60px;
	min-height: 100vh;
	min-width: 0px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const Wrapper = styled.div`
	width: 400px;
	position: relative;
`;

export const Option = styled.span`
	display: inline-block;
	margin-right: 30px;
	color: #848484;
	padding: 10px 15px;
	border: 1px solid;
	border-color: ${({ active }) => (active ? "#f6aa8d" : "#848484")};
	border-radius: 12px;
	cursor: pointer;
`;

export const Input = styled.input`
	display: inline-block;
	padding: 10px 15px;
	border: 1px solid #848484;
	border-radius: 12px;
	outline-color: #f6aa8d;
`;

export const Name = styled.h2`
	margin-top: 0;
	margin-bottom: 5px;
	text-transform: uppercase;
`;

export const Title = styled.h4``;

export const Text = styled.p`
	color: ${({ color }) => (color ? "#f6aa8d" : "#848484")};
	font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
	font-size: ${({ fontSize }) => (fontSize ? fontSize : "16px")};
	margin-top: 0;
	line-height: 25px;
	${({ uppercase }) => uppercase && { "text-transform": "uppercase" }};
	${({ italic }) => italic && { "font-style": "italic" }};
`;

export const ImagePreview = styled.img`
	width: 100px;
	height: 120px;
	object-fit: cover;
	cursor: pointer;
	margin-right: 5px;
	border: 1px solid;
	border-color: ${({ active }) => (active ? "#f6aa8d" : "transparent")};
	border-radius: 12px;
`;

export const Image = styled.img`
	border-radius: 12px;
	width: 400px;
	height: 500px;
	object-fit: cover;
`;

export const Button = styled.button`
	display: block;
	margin-top: 30px;
	padding: 15px 20px;
	background-color: black;
	color: white;
	font-weight: 700;
	letter-spacing: 4px;
	border: 1px solid black;
	cursor: pointer;

	:hover {
		transition: 0.5s;
		background-color: #f6aa8d;
		color: white;
		border: 1px solid #f6aa8d;
	}

	:disabled {
		background-color: #d7d2d2;
		border: 1px solid #d7d2d2;
	}
`;

export const SubText = styled.span`
	position: absolute;
	top: 2px;
	left: 80px;
	text-decoration: line-through;
	font-size: 16px;
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
