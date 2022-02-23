import React, { useState } from "react";
import { goBack } from "react-chrome-extension-router";
import { updatePost } from "../api";
import Form from "../components/Form";

const EditPage = ({ item }) => {
	const [postData, setPostData] = useState(item);
	const handleSubmit = async (e) => {
		e.preventDefault();
		await updatePost(item._id, postData);
		goBack();
	};

	const handleCancel = () => {
		setPostData(item);
		goBack();
	};

	return <Form postData={postData} setPostData={setPostData} handleSubmit={handleSubmit} handleCancel={handleCancel} />;
};

export default EditPage;
