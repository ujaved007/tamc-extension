import React from "react";
import { goTo } from "react-chrome-extension-router";

import data from "../utils/data";
import { handleCopy, handlePaste, handleListClick } from "../utils/messageFuncs";
import { Section, Header, ListItems, Icon, AddBtnContainer } from "../styles/HomePage.styles";
import { PrimaryBtn, PrimaryBtnSm, DangerBtnSm, TertiaryBtnSm } from "../styles/Button.styles";
import { logoutHandler } from "../utils/logouthandler";
import { fetchPosts } from "../api";

import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";
import EditPage from "./EditPage";
import AddPage from "./AddPage";

const HomePage = ({ userId }) => {
	console.log(fetchPosts());
	return (
		<Section>
			<Header>
				<PrimaryBtnSm onClick={handleCopy}>Copy</PrimaryBtnSm>
				<DangerBtnSm onClick={logoutHandler}>Logout</DangerBtnSm>
				<TertiaryBtnSm onClick={handlePaste}>Paste</TertiaryBtnSm>
			</Header>
			{data.map((item, index) => {
				return (
					<ListItems key={index} color={item.color} onClick={() => handleListClick(item)}>
						<div> {item.name}</div>
						<div>
							<Icon src={edit} alt="edit" onClick={() => goTo(EditPage, { userId })} />
							<Icon src={del} alt="delete" />
						</div>
					</ListItems>
				);
			})}
			<AddBtnContainer>
				<PrimaryBtn onClick={() => goTo(AddPage, { userId })}>Add new</PrimaryBtn>
			</AddBtnContainer>
		</Section>
	);
};

export default HomePage;
