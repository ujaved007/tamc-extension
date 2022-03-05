import mongoose from "mongoose";

const PostSchema = mongoose.Schema({
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

const Posts = mongoose.model("Posts", PostSchema);

export { Posts };
