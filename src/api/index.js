import axios from "axios";

const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);

// export const createPosts = (newPost) =>
// 	axios.post(url, newPost).then(
// 		(response) => {
// 			console.log(response);
// 		},
// 		(error) => {
// 			console.log(error);
// 		}
// 	);
// export const fetchPost = (newPost) => {
// 	fetch(url, {
// 		method: "post",
// 		body: JSON.stringify(newPost),
// 	})
// 		.then((res) => res.JSON)
// 		.then((res) => console.log(res));
// };

// export const createPost = async (data) => {
// 	axios({
// 		method: "post",
// 		url: url,
// 		data: data,
// 	})
// 		.then(function (response) {
// 			console.log(response);
// 		})
// 		.catch(function (response) {
// 			console.log(response);
// 		});
// };

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
