import React from "react";
import { useState } from "react";
import { goBack, goTo } from "react-chrome-extension-router";
import { mutate } from "swr";

import { Section, Form, Label, InputWrapper, PaddingBtm } from "../styles/Form.styles";
import { PrimaryBtnMarginRight, DangerBtnMarginRight } from "../styles/Button.styles";
import { createPost, fetchPost } from "../api";
import { staff } from "../utils/data";
import HomePage from "./HomePage";

const AddPage = ({ userId, data }) => {
	const initialState = { name: "", title: "", details: "", closing: "", status: "", color: "", userId };
	const [postData, setPostData] = useState(initialState);
	const handleSubmit = (e) => {
		e.preventDefault();
		mutate(`http://localhost:5000/posts/${userId}`, { ...data, postData }, false);
		createPost(postData);
		mutate(`http://localhost:5000/posts/${userId}`);
		setPostData(initialState);
		goBack();
	};

	const handleCancel = () => {
		setPostData(initialState);
		goBack();
	};

	return (
		<Section>
			<Form method="POST">
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
						{staff.map((item) => {
							return <option value={item}>{item}</option>;
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
			</Form>
		</Section>
	);
};

export default AddPage;
