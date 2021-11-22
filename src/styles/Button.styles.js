import styled from "styled-components";

export const PrimaryBtn = styled.button`
	padding: 12px 15px 12px 15px;
	font-size: 1rem;
	cursor: pointer;
	color: ${(props) => props.theme.colors.text};
	background-color: ${(props) => props.theme.colors.green};
	border: none;
	border-radius: 15px;
`;

export const DangerBtn = styled(PrimaryBtn)`
	background-color: ${(props) => props.theme.colors.red};
`;

export const TertiaryBtn = styled(PrimaryBtn)`
	background-color: ${(props) => props.theme.colors.yellow};
`;

export const PrimaryBtnSm = styled(PrimaryBtn)`
	padding: 7px 10px 7px 10px;
`;

export const TertiaryBtnSm = styled(TertiaryBtn)`
	padding: 7px 10px 7px 10px;
`;
export const DangerBtnSm = styled(DangerBtn)`
	padding: 7px 10px 7px 10px;
`;

export const PrimaryBtnMarginRight = styled(PrimaryBtn)`
	margin-right: 10px;
`;

export const DangerBtnMarginRight = styled(DangerBtn)`
	margin-right: 10px;
`;
