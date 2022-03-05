import React from "react";
import { Section, FormElem, Label, InputWrapper, PaddingBtm } from "../styles/Form.styles";
import { PrimaryBtnMarginRight, DangerBtnMarginRight } from "../styles/Button.styles";

const Form = ({ postData, setPostData, staffNames, handleSubmit, handleCancel }) => {
	return (
		<Section>
			<FormElem method="POST">
				<InputWrapper>
					<Label for="name">Log Title:</Label>
					<br />
					<input
						type="text"
						id="name"
						name="name"
						className="text-field"
						value={postData.name}
						onChange={(e) => setPostData({ ...postData, name: e.target.value })}
					/>
					<br />
				</InputWrapper>
				<InputWrapper>
					<Label for="opening">Opening Guard:</Label>
					<br />
					<div className="select">
						<select
							id="opening"
							name="opening"
							className="dropdown"
							value={postData.opening}
							onChange={(e) => setPostData({ ...postData, opening: e.target.value })}
						>
							{staffNames.map((item) => {
								return item.data.map((item, index) => {
									return (
										<option value={item} key={index}>
											{item}
										</option>
									);
								});
							})}
						</select>
					</div>
					<br />
				</InputWrapper>
				<InputWrapper>
					<Label for="title">Log Type:</Label>
					<br />
					<select
						id="title"
						name="title"
						className="dropdown"
						value={postData.title}
						onChange={(e) => setPostData({ ...postData, title: e.target.value })}
					>
						<option value=""></option>
						<option value="CCURE Alarm Investigation">CCURE Alarm Investigation</option>
						<option value="Faulty Alarm Log">Faulty Alarm Log</option>
						<option value="SAPIO Alarm Investigation">SAPIO Alarm</option>
					</select>
				</InputWrapper>
				<InputWrapper>
					<Label for="details">Details</Label> <br />
					<textarea
						id="details"
						name="details"
						rows="5"
						cols="33"
						value={postData.details}
						onChange={(e) => setPostData({ ...postData, details: e.target.value })}
					/>
				</InputWrapper>
				<InputWrapper>
					<Label for="closing">Closing Guard:</Label>
					<br />
					<select
						id="closing"
						name="closing"
						className="dropdown"
						value={postData.closing}
						onChange={(e) => setPostData({ ...postData, closing: e.target.value })}
					>
						{staffNames.map((item) => {
							return item.data.map((item, index) => {
								return (
									<option value={item} key={index}>
										{item}
									</option>
								);
							});
						})}
					</select>
					<br />
				</InputWrapper>
				<InputWrapper>
					<Label for="status">Status:</Label>
					<br />
					<select
						id="status"
						name="status"
						className="dropdown"
						value={postData.status}
						onChange={(e) => setPostData({ ...postData, status: e.target.value })}
					>
						<option value=""></option>
						<option value="Closed">Closed</option>
						<option value="Open">Open</option>
					</select>
				</InputWrapper>
				<InputWrapper value={postData.color} onChange={(e) => setPostData({ ...postData, color: e.target.value })}>
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
					<PrimaryBtnMarginRight type="submit" onClick={handleSubmit}>
						Save Changes
					</PrimaryBtnMarginRight>
					<DangerBtnMarginRight onClick={handleCancel}>Cancel</DangerBtnMarginRight>
				</InputWrapper>
				<PaddingBtm />
			</FormElem>
		</Section>
	);
};

export default Form;
