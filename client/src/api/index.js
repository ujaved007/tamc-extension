import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = (id) =>
	axios
		.get(`${url}/${id}`)
		.then((res) => res.data)
		.catch((err) => console.log(err));

export const createPost = (data) => {
	fetch("http://localhost:5000/posts", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => response.json())
		.catch((error) => {
			console.error("Error:", error);
		});
};

export const updatePost = (id, data) => {
	axios(`${url}/${id}`, {
		method: "PATCH",
		data: data,
	})
		// .then((res) => res.json())
		.then((da) => console.log(da))
		.catch((error) => console.log(error));
};

export const deletePost = (id) => {
	axios.delete(`${url}/${id}`).catch(() => console.log("abay loru"));
};
