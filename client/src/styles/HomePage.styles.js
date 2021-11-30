import styled from "styled-components";

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Header = styled.div`
	display: flex;
	margin: 15px 10px 15px 10px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`;

export const HeaderBtn = styled.button`
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

export const ListItems = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => {
		if (props.color === "red") {
			return props.theme.colors.red;
		} else if (props.color === "orange") {
			return props.theme.colors.orange;
		} else if (props.color === "yellow") {
			return props.theme.colors.yellow;
		}
		return props.theme.colors.green;
	}};
	border-radius: 10px;
	margin: 0px 10px 10px 10px;
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

export const AddBtnContainer = styled.div`
	display: flex;
	justify-content: center;
	margin: 5px 0px 15px 0px;
`;

export const ListNameContainer = styled.div`
	width: 100%;
	padding: 20px 10px;
	display: flex;
	flex-direction: column;
`;

export const ListIconsContainer = styled.div`
	display: flex;
`;
