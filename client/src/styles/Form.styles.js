import styled from "styled-components";

export const Section = styled.section`
	margin: 20px 20px 30px 20px;
`;

export const FormElem = styled.form`
	width: 100%;
	.text-field {
		background-color: transparent;
		color: ${(props) => props.theme.colors.text};
		border: none;
		border-bottom: 2px solid ${(props) => props.theme.colors.text};
		font-size: 1rem;
		margin-top: 10px;
		width: 80%;
	}
	.dropdown {
		background-color: transparent;
		color: ${(props) => props.theme.colors.text};
		font-size: 1rem;
		border: 2px solid ${(props) => props.theme.colors.text};
		border-radius: 5px;
		margin-top: 10px;
		padding: 5px 5px 5px 5px;
	}
	textarea {
		background-color: transparent;
		color: ${(props) => props.theme.colors.text};
		font-size: 1rem;
		border: 2px solid ${(props) => props.theme.colors.text};
		border-radius: 5px;
		margin-top: 10px;
		padding: 5px 5px 5px 5px;
	}
	p {
		font-size: 1rem;
		margin-bottom: 2 px;
	}
	/* Custom RADIO */
	.radio {
		display: inline-flex;
		align-items: center;
		cursor: pointer;
		margin-right: 10px;
		margin-top: -10px;
	}
	.radio-input {
		display: none;
	}
	.custom-radio {
		width: 1.5em;
		height: 1.5em;
		border-radius: 20%;
	}
	.custom-radio.green {
		background-color: ${(props) => props.theme.colors.green};
	}
	.custom-radio.yellow {
		background-color: ${(props) => props.theme.colors.yellow};
	}
	.custom-radio.orange {
		background-color: ${(props) => props.theme.colors.orange};
	}
	.custom-radio.red {
		background-color: ${(props) => props.theme.colors.red};
	}
	.custom-radio::after {
		content: "";
		width: 100%;
		height: 100%;
		display: block;
		border: 2px solid ${(props) => props.theme.colors.text};
		border-radius: 20%;
		transform: scale(0);
		transition: transform 0.15s;
	}
	.radio-input:checked + .custom-radio::after {
		transform: scale(1);
	}
`;
export const InputWrapper = styled.div`
	margin-bottom: 20px;
`;
export const Label = styled.label`
	font-size: 1rem;
	margin-top: 20px;
`;
export const PaddingBtm = styled.div`
	padding-bottom: 10px;
	width: inherit;
`;
