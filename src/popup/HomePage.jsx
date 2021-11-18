import React from "react";
import data from "../utils/data";
import {
	Section,
	Header,
	HeaderBtn,
	ListItems,
	Icon,
} from "../styles/HomePage.styles";
import { goTo } from "react-chrome-extension-router";

import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";
import copy from "../assets/copy.svg";
import EditPage from "./EditPage";
import AddPage from "./AddPage";

const HomePage = () => {
	const handleListClick = (data) => {
		chrome.runtime.sendMessage(
			{
				msg: "autofill daily log",
				data: data,
			},
			(response) => {
				if (response) {
					console.log(response);
				}
			}
		);
	};
	const handleCopy = () => {
		chrome.storage.local.getBytesInUse(null, (res) => {
			if (res === 0) {
				chrome.runtime.sendMessage(
					{
						msg: "copy form",
					},
					(response) => {
						if (response) {
							console.log(response);
						}
					}
				);
			} else
				chrome.runtime.sendMessage(
					{
						msg: "paste form",
					},
					(response) => {
						if (response) {
							console.log(response);
						}
					}
				);
		});
	};
	return (
		<Section>
			<Header>
				<Icon src={copy} alt="COPY" onClick={handleCopy} />
				<HeaderBtn onClick={() => goTo(AddPage)}>+</HeaderBtn>
			</Header>
			{data.map((item, index) => {
				return (
					<ListItems
						key={index}
						color={item.color}
						onClick={() => handleListClick(item)}
					>
						<div> {item.name}</div>
						<div>
							<Icon src={edit} alt="edit" onClick={() => goTo(EditPage)} />
							<Icon src={del} alt="delete" />
						</div>
					</ListItems>
				);
			})}
		</Section>
	);
};

export default HomePage;
