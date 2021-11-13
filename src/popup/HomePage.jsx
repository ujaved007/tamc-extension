import React from "react";
import data from "../utils/data";
import {
	Section,
	Header,
	AddBtn,
	ListItems,
	Icon,
} from "../styles/HomePage.styles";

import edit from "../utils/edit.svg";
import del from "../utils/delete.svg";

const HomePage = () => {
	const dat = { name: "lol lool" };
	const handleListClick = (data) => {
		chrome.runtime.sendMessage(
			{
				msg: "popup clicked",
				data: data,
			},
			(response) => {
				if (response) {
					console.log(response);
				}
			}
		);
	};

	return (
		<Section>
			<Header>
				<AddBtn>+</AddBtn>
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
							<Icon src={edit} alt="edit" />
							<Icon src={del} alt="delete" />
						</div>
					</ListItems>
				);
			})}
		</Section>
	);
};

export default HomePage;
