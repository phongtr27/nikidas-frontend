import styled from "styled-components/macro";

export const Container = styled.div`
	padding: 60px 60px 0px 60px;
	min-height: 0px;
	min-width: 0px;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
`;

export const Wrapper = styled.div`
	width: 400px;
`;

export const Option = styled.span`
	display: inline-block;
	margin-right: 30px;
	margin-bottom: 30px;
	color: #848484;
	padding: 10px 15px;
	border: 1px solid #848484;
	border-radius: 12px;
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
	border: 1px solid transparent;
	border-radius: 12px;
`;

export const Image = styled.img`
	border-radius: 12px;
	width: 400px;
	height: 500px;
	object-fit: cover;
`;
