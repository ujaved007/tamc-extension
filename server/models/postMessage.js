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
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
