import React, { useState, useEffect } from "react";
import axios from "axios";
import { goBack } from "react-chrome-extension-router";
import { updatePost } from "../api";
import Form from "../components/Form";

const EditPage = ({ item, data, userId, index }) => {
	const [postData, setPostData] = useState(item);
	const [staffNames, setStaffNames] = useState([]);
	//get staff names
	useEffect(() => {
		axios.get(`http://localhost:5000/staff/`).then(
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
		const updateArray = data.splice(index, 1, postData);
		const formatData = { data: data };
		await updatePost(userId, formatData);
		goBack();
	};

	const handleCancel = () => {
		setPostData(item);
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

export default EditPage;
