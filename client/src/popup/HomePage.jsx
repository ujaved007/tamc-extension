import React, { useState, useEffect } from "react";
import { goTo } from "react-chrome-extension-router";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { handleCopy, handlePaste, handleListClick } from "../utils/messageFuncs";
import { updatePost } from "../api";
import {
	Section,
	Header,
	ListItems,
	ListNameContainer,
	ListIconsContainer,
	Icon,
	AddBtnContainer,
	LoadingIcon,
} from "../styles/HomePage.styles";
import { PrimaryBtn, PrimaryBtnSm, DangerBtnSm, TertiaryBtnSm } from "../styles/Button.styles";
import { HorizontalWrapper } from "../styles/Main.styles";
import { logoutHandler } from "../utils/logouthandler";

import edit from "../assets/edit.svg";
import del from "../assets/delete.svg";
import loading from "../assets/loading.gif";
import EditPage from "./EditPage";
import AddPage from "./AddPage";
import axios from "axios";

const HomePage = ({ userId }) => {
	//useEffect for fetching posts
	useEffect(() => {
		axios.get(`${process.env.TEST_URL}/${userId}`).then(
			(response) => {
				const result = response.data;
				if (result.length === 0) {
					setData([]);
				} else {
					setData(result[0].data);
				}
			},
			(error) => {
				console.log(error);
			}
		);
	}, [data, userId]);

	const [copyMsg, setCopyMsg] = useState("");
	const [pasteMsg, setPasteMsg] = useState("");
	const [data, setData] = useState(null);

	if (!data)
		return (
			<HorizontalWrapper>
				<LoadingIcon src={loading} alt="loading.." />
			</HorizontalWrapper>
		);

	const handleDelete = async (id) => {
		const updateArr = data.filter((item) => item._id !== id);
		setData(updateArr);
		//format data to get it ready to be inserted back in the database
		const formatData = { data: updateArr };
		//update new array in the database
		await updatePost(userId, formatData);
	};

	const handleOnDragEnd = (result) => {
		const items = Array.from(data);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		setData(items);
		//format data to get it ready to be inserted back in the database
		const formatData = { data: items };
		//update new order in the database
		updatePost(userId, formatData);
	};
	console.log(data);
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
			<DragDropContext onDragEnd={handleOnDragEnd}>
				<Droppable droppableId="list">
					{(provided) => (
						<div {...provided.droppableProps} ref={provided.innerRef}>
							{data.map((item, index) => {
								return (
									<Draggable key={item._id} draggableId={item._id} index={index}>
										{(provided) => (
											<ListItems
												color={item.color}
												{...provided.draggableProps}
												{...provided.dragHandleProps}
												ref={provided.innerRef}
											>
												<ListNameContainer onClick={() => handleListClick(item)}>{item.name}</ListNameContainer>
												<ListIconsContainer>
													<Icon src={edit} alt="edit" onClick={() => goTo(EditPage, { item, data, userId, index })} />
													<Icon
														src={del}
														alt="delete"
														onClick={() => {
															handleDelete(item._id);
														}}
													/>
												</ListIconsContainer>
											</ListItems>
										)}
									</Draggable>
								);
							})}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
			<AddBtnContainer>
				<PrimaryBtn onClick={() => goTo(AddPage, { userId, data })}>Add new</PrimaryBtn>
			</AddBtnContainer>
		</Section>
	);
};

export default HomePage;
