import { Posts } from "../models/posts.js";

export const getPosts = async (req, res) => {
	try {
		const postMessages = await Posts.find({ _id: req.params.userId });
		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const updatePosts = async (req, res) => {
	const { id: _id } = req.params;
	const post = req.body;
	const postExists = (await Posts.find({ _id }).count()) > 0;
	// if no post with that id means account is new so create a new post
	if (!postExists) {
		const newPostMessage = new Posts({
			_id,
			data: [],
		});
		try {
			await newPostMessage.save();
			const updatedPost = await Posts.findByIdAndUpdate(_id, post, { new: true });
			res.json(updatedPost);
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	} else {
		try {
			const updatedPost = await Posts.findByIdAndUpdate(_id, post, { new: true });
			res.json(updatedPost);
		} catch (error) {
			res.json({ message: error.message });
		}
	}
};

export const deletePosts = async (req, res) => {
	const { id: _id } = req.params;
	try {
		await Posts.findByIdAndDelete(_id);
		res.json({ message: "Post deleted" });
	} catch (error) {
		res.status(404).send("no post with that id");
	}
};
