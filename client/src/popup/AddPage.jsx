import React, { useState } from "react";
import { goBack } from "react-chrome-extension-router";
import Form from "../components/Form";
import { createPost } from "../api";
import { mutate } from "swr";

const AddPage = ({ userId, data }) => {
	const initialState = { name: "", title: "", details: "", closing: "", status: "", color: "", userId };
	const [postData, setPostData] = useState(initialState);
	const handleSubmit = async (e) => {
		e.preventDefault();
		await mutate({ ...data }, postData);
		createPost(postData);
		// mutate(`http://localhost:5000/posts/${userId}`, false);
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
