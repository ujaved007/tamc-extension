import mongoose from "mongoose";

const postSchema = mongoose.Schema({
	name: String,
	title: String,
	details: String,
	closing: String,
	status: String,
	color: String,
});

const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;