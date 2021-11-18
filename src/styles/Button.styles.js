import styled from "styled-components";

export const PrimaryBtn = styled.button`
	padding: 12px 15px 12px 15px;
	font-size: 1rem;
	margin-right: 10px;
	cursor: pointer;
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.green};
	border: none;
	border-radius: 15px;
`;

export const DangerBtn = styled(PrimaryBtn)`
	background-color: ${(props) => props.theme.colors.red};
`;
