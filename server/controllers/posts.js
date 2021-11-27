import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find({ userId: req.params.userId });
		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPosts = async (req, res) => {
	const newPostMessage = new PostMessage({
		name: req.body.name,
		title: req.body.title,
		details: req.body.details,
		closing: req.body.closing,
		status: req.body.status,
		color: req.body.color,
		userId: req.body.userId,
	});
	try {
		await newPostMessage.save();
		res.status(201).json(newPostMessage);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

export const updatePosts = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;

	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with that id");

	const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, { new: true });
	res.json(updatedPost);
};

export const deletePosts = async (req, res) => {
	const { id: _id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no post with that id");
	await PostMessage.findByIdAndDelete(_id);
	res.json({ message: "Post deleted" });
};
