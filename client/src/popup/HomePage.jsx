import React, { useState, useEffect } from "react";
import { goTo } from "react-chrome-extension-router";
import useSWR, { mutate } from "swr";
import { fetchPosts } from "../api";

import { handleCopy, handlePaste, handleListClick } from "../utils/messageFuncs";
import { deletePost } from "../api";
import { Section, Header, ListItems, Icon, AddBtnContainer } from "../styles/HomePage.styles";
import { PrimaryBtn, PrimaryBtnSm, DangerBtnSm, TertiaryBtnSm } from "../styles/Button.styles";
import { logoutHandler } from "../utils/logouthandler";

import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";
import EditPage from "./EditPage";
import AddPage from "./AddPage";

// const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HomePage = ({ userId }) => {
	const { data, error } = useSWR(`http://localhost:5000/posts/${userId}`, {
		revalidateOnFocus: false,
		revalidateOnMount: true,
	});
	if (!data) return "Loading...";
	if (error) return "there was an error";

	return (
		<Section>
			<Header>
				<PrimaryBtnSm onClick={handleCopy}>Copy</PrimaryBtnSm>
				<DangerBtnSm onClick={logoutHandler}>Logout</DangerBtnSm>
				<TertiaryBtnSm onClick={handlePaste}>Paste</TertiaryBtnSm>
			</Header>
			{data.map((item) => {
				return (
					<ListItems key={item._id} color={item.color} onClick={() => handleListClick(item)}>
						<div> {item.name}</div>
						<div>
							<Icon src={edit} alt="edit" onClick={() => goTo(EditPage, { item })} />
							<Icon
								src={del}
								alt="delete"
								onClick={() => {
									mutate(`http://localhost:5000/posts/${userId}`);
									deletePost(item._id);
								}}
							/>
						</div>
					</ListItems>
				);
			})}
			<AddBtnContainer>
				<PrimaryBtn onClick={() => goTo(AddPage, { userId, data })}>Add new</PrimaryBtn>
			</AddBtnContainer>
		</Section>
	);
};

export default HomePage;
