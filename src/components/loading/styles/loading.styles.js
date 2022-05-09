import { keyframes } from "styled-components";
import styled, { createGlobalStyle } from "styled-components/macro";

const spinner = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Container = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	width: 50px;
	height: 50px;
	border: 10px solid #f3f3f3;
	border-top: 10px solid #383636;
	border-radius: 50%;
	animation: ${spinner} 1.5s linear infinite;
`;

export const Spinner = styled.div`
	display: grid;
	justify-content: center;
	align-items: center;
	height: 350px;
`;

export const LockBody = createGlobalStyle`
  body {
    overflow: hidden;
  }
`;

export const ReleaseBody = createGlobalStyle`
  body {
    overflow: visible;
  }
`;
