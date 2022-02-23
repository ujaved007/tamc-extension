import React, { useState } from "react";
import { goBack } from "react-chrome-extension-router";
import { updatePost } from "../api";
import Form from "../components/Form";

const EditPage = ({ item, data, userId, index }) => {
	const [postData, setPostData] = useState(item);
	const handleSubmit = async (e) => {
		e.preventDefault();
		const updateArray = data.splice(index, 1, postData);
		const formatData = { data: data };
		await updatePost(userId, formatData);
		goBack();
	};

	const handleCancel = () => {
		setPostData(item);
		goBack();
	};

	return <Form postData={postData} setPostData={setPostData} handleSubmit={handleSubmit} handleCancel={handleCancel} />;
};

export default EditPage;
