import styled from "styled-components";

export const Heading = styled.h1`
	font-size: 1.2rem;
	font-weight: 400;
	color: ${(props) => props.theme.colors.text};
`;

export const SubHeading = styled.p`
	font-size: 0.8rem;
	text-align: center;
	font-weight: 400;
	margin-top: -5px;
	color: ${(props) => props.theme.colors.text};
`;

export const HorizontalWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;
