import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	/* margin: 0 auto; */
	width: 100%;
`;

export const Container = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-end;
`;

export const AddBtn = styled.button`
	padding: 10px 20px 10px 20px;
	background: none;
	border-style: none;
	color: ${(props) => props.theme.colors.text};
	font-size: 1.5rem;

	&:hover {
		color: ${(props) => props.theme.colors.bg};
		background-color: ${(props) => props.theme.colors.text};
		cursor: pointer;
	}
`;
