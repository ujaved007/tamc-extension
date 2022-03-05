import React, { useState, useEffect } from "react";
import axios from "axios";
import { goBack } from "react-chrome-extension-router";
import Form from "../components/Form";
import { updatePost } from "../api";

const AddPage = ({ userId, data }) => {
	const initialState = { name: "", title: "", details: "", closing: "", status: "", color: "" };
	const [postData, setPostData] = useState(initialState);
	const [staffNames, setStaffNames] = useState([]);
	//get staff names
	useEffect(() => {
		axios.get(process.env.TEST_STAFF_URL).then(
			(response) => {
				const result = response.data;
				setStaffNames(result);
			},
			(error) => {
				console.log(error);
			}
		);
	}, []);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const addedData = data.push(postData);
		const formatData = { data: data };
		await updatePost(userId, formatData);
		// await createPost(postData);
		setPostData(initialState);
		goBack();
	};

	const handleCancel = () => {
		setPostData(initialState);
		goBack();
	};

	return (
		<Form
			postData={postData}
			setPostData={setPostData}
			staffNames={staffNames}
			handleSubmit={handleSubmit}
			handleCancel={handleCancel}
		/>
	);
};

export default AddPage;
