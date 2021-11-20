import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

export const createPosts = (newPost) =>
	axios.post(url, newPost).then(
		(response) => {
			console.log(response);
		},
		(error) => {
			console.log(error);
		}
	);
// export const fetchPost = (newPost) => {
// 	fetch(url, {
// 		method: "post",
// 		body: JSON.stringify(newPost),
// 	})
// 		.then((res) => res.JSON)
// 		.then((res) => console.log(res));
// };

// export const createPost = async (post) => {
// 	try {
// 		const { data } = await api.createPosts(post);
// 	} catch (error) {
// 		console.log(error);
// 	}
// };
