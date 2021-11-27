import React, { useState } from "react";
import { goTo } from "react-chrome-extension-router";
import useSWR from "swr";

import { handleCopy, handlePaste, handleListClick } from "../utils/messageFuncs";
import { Section, Header, ListItems, Icon, AddBtnContainer } from "../styles/HomePage.styles";
import { PrimaryBtn, PrimaryBtnSm, DangerBtnSm, TertiaryBtnSm } from "../styles/Button.styles";
import { logoutHandler } from "../utils/logouthandler";

import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";
import EditPage from "./EditPage";
import AddPage from "./AddPage";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const HomePage = ({ userId }) => {
	const { data, error } = useSWR(`http://localhost:5000/posts/${userId}`, fetcher, {
		revalidateOnFocus: false,
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
							{/* <Icon src={edit} alt="edit" onClick={() => goTo(EditPage, { userId })} /> */}
							<Icon src={del} alt="delete" />
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
