import React, { useState, useEffect } from "react";
import { goTo } from "react-chrome-extension-router";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import { handleCopy, handlePaste, handleListClick } from "../utils/messageFuncs";
import { deletePost } from "../api";
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
	useEffect(() => {
		axios.get(`${process.env.API_URL}/${userId}`).then(
			(response) => {
				setData(response.data);
			},
			(error) => {
				console.log(error);
			}
		);
	}, [userId, data]);

	const [copyMsg, setCopyMsg] = useState("");
	const [pasteMsg, setPasteMsg] = useState("");
	const [data, setData] = useState();

	const handleDelete = (id) => {
		const updateArr = data.filter((item) => item._id !== id);
		setData(updateArr);
	};

	const handleOnDragEnd = (result) => {
		const items = Array.from(data);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);
		setData(items);
	};

	if (!data)
		return (
			<HorizontalWrapper>
				<LoadingIcon src={loading} alt="loading.." />
			</HorizontalWrapper>
		);

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
													<Icon src={edit} alt="edit" onClick={() => goTo(EditPage, { item })} />
													<Icon
														src={del}
														alt="delete"
														onClick={async () => {
															handleDelete(item._id);
															await deletePost(item._id);
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
