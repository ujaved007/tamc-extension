import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url).then((res) => res.data);

export const createPost = (data) => {
	fetch("http://localhost:5000/posts", {
		method: "POST", // or 'PUT'
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log("Success:", data);
		})
		.catch((error) => {
			console.error("Error:", error);
		});
};
