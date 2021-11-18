import React from "react";
import { Section, Form, Label, InputWrapper, PaddingBtm } from "../styles/Form.styles";
import { PrimaryBtn, DangerBtn } from "../styles/Button.styles";

const AddPage = () => {
	return (
		<Section>
			<Form action="">
				<InputWrapper>
					<Label for="name">Log Title:</Label>
					<br />
					<input type="text" id="name" name="name" className="text-field" />
					<br />
				</InputWrapper>
				<InputWrapper>
					<Label for="title">Log Type:</Label>
					<br />
					<select id="title" name="title" className="dropdown">
						<option value=""></option>
						<option value="CCURE Alarm Investigation">CCURE Alarm Investigation</option>
						<option value="Faulty Alarm Log">Faulty Alarm Log</option>
					</select>
				</InputWrapper>
				<InputWrapper>
					<Label for="details">Details</Label> <br />
					<textarea id="details" name="details" rows="5" cols="33" />
				</InputWrapper>
				<InputWrapper>
					<Label for="closing">Closing Guard:</Label>
					<br />
					<input type="text" id="closing" name="closing" className="text-field" />
					<br />
				</InputWrapper>
				<InputWrapper>
					<Label for="status">Status:</Label>
					<br />
					<select id="status" name="status" className="dropdown">
						<option value=""></option>
						<option value="Closed">Closed</option>
						<option value="Open">Open</option>
					</select>
				</InputWrapper>
				<InputWrapper>
					<p>Select Color:</p> <br />
					<label className="radio" for="green">
						<input type="radio" id="green" name="color" value="green" className="radio-input" />
						<div className="custom-radio green"></div>
					</label>
					<label className="radio" for="yellow">
						<input type="radio" id="yellow" name="color" value="yellow" className="radio-input" />
						<div className="custom-radio yellow"></div>
					</label>
					<label className="radio" for="orange">
						<input type="radio" id="orange" name="color" value="orange" className="radio-input" />
						<div className="custom-radio orange"></div>
					</label>
					<label className="radio" for="red">
						<input type="radio" id="red" name="color" value="red" className="radio-input" />
						<div className="custom-radio red"></div>
					</label>
				</InputWrapper>
				<InputWrapper>
					<PrimaryBtn>Save Changes</PrimaryBtn>
					<DangerBtn>Cancel</DangerBtn>
				</InputWrapper>
				<PaddingBtm />
			</Form>
		</Section>
	);
};

export default AddPage;
