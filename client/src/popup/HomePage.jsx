import React, { useState } from "react";
import { goTo } from "react-chrome-extension-router";
import useSWR, { mutate } from "swr";

import { handleCopy, handlePaste, handleListClick } from "../utils/messageFuncs";
import { deletePost } from "../api";
import { Section, Header, ListItems, Icon, AddBtnContainer } from "../styles/HomePage.styles";
import { PrimaryBtn, PrimaryBtnSm, DangerBtnSm, TertiaryBtnSm } from "../styles/Button.styles";
import { logoutHandler } from "../utils/logouthandler";

import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";
import EditPage from "./EditPage";
import AddPage from "./AddPage";

const HomePage = ({ userId }) => {
	const [copyMsg, setCopyMsg] = useState("");
	const [pasteMsg, setPasteMsg] = useState("");

	const { data, error } = useSWR(`${process.env.API_URL}/${userId}`, {
		revalidateOnFocus: false,
		revalidateOnMount: true,
	});
	if (!data) return "Loading...";
	if (error) return "there was an error";
	return (
		<Section>
			<Header>
				<PrimaryBtnSm onClick={() => handleCopy(setCopyMsg)}>
					{copyMsg.length === 0 ? `Copy` : `${copyMsg}`}
				</PrimaryBtnSm>
				<DangerBtnSm onClick={logoutHandler}>Logout</DangerBtnSm>
				<TertiaryBtnSm onClick={() => handlePaste(setPasteMsg)}>
					{pasteMsg.length === 0 ? `Paste` : `${pasteMsg}`}
				</TertiaryBtnSm>
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
								onClick={async () => {
									await deletePost(item._id);
									mutate(`${process.env.API_URL}/${userId}`);
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
