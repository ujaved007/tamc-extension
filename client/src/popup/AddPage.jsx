import React, { useState } from "react";
import { goBack } from "react-chrome-extension-router";
import Form from "../components/Form";
import { updatePost } from "../api";
import { mutate } from "swr";

const AddPage = ({ userId, data }) => {
	const initialState = { name: "", title: "", details: "", closing: "", status: "", color: "" };
	const [postData, setPostData] = useState(initialState);
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

	return <Form postData={postData} setPostData={setPostData} handleSubmit={handleSubmit} handleCancel={handleCancel} />;
};

export default AddPage;
