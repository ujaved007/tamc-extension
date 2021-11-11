import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Header = styled.div`
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-end;
`;

export const AddBtn = styled.button`
	padding: 10px 20px 10px 20px;
	background: none;
	border-style: none;
	margin-bottom: 10px;
	color: ${(props) => props.theme.colors.text};
	font-size: 1.5rem;

	&:hover {
		color: ${(props) => props.theme.colors.bg};
		background-color: ${(props) => props.theme.colors.text};
		cursor: pointer;
	}
`;

export const ListItems = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.theme.colors.green};
	border-radius: 10px;
	margin: 0px 10px 10px 10px;
	padding: 20px 10px 20px 10px;
	color: ${(props) => props.theme.colors.text};
	font-size: 1rem;
	&:hover {
		cursor: pointer;
	}
`;

export const Icon = styled.img`
	height: 25px;
	margin-right: 5px;
	&:hover {
		cursor: pointer;
	}
`;
