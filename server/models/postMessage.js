import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	name: String,
	opening: String,
	title: String,
	details: String,
	closing: String,
	status: String,
	color: String,
	userId: String,
	index: Number,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

const testPostSchema = mongoose.Schema({
	_id: String,
	data: [
		{
			name: String,
			opening: String,
			title: String,
			details: String,
			closing: String,
			status: String,
			color: String,
			userId: String,
		},
	],
});

const TestPosts = mongoose.model("TestPosts", testPostSchema);

export { PostMessage, TestPosts };
