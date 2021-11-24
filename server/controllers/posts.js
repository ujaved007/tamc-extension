import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
	try {
		const postMessages = await PostMessage.find();
		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPosts = async (req, res) => {
	console.log(req.body);
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
