import styled from "styled-components";

export const Section = styled.section`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.colors.text};
`;

export const SigninCard = styled.div`
	width: 30rem;
	height: 20rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	background-color: ${(props) => props.theme.colors.bg};
`;

export const Heading = styled.h1`
	font-size: 1.2rem;
	font-weight: 400;
	color: ${(props) => props.theme.colors.text};
`;

export const SubHeading = styled.p`
	font-size: 1rem;
	font-weight: 400;
	margin-top: -5px;
	color: ${(props) => props.theme.colors.text};
`;
