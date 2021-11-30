import axios from "axios";

export const fetchPosts = (id) =>
	axios
		.get(`${process.env.API_URL}/${id}`)
		.then((res) => res.data)
		.catch((err) => console.log(err));

export const createPost = async (data) => {
	const settings = {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	};
	try {
		const fetchRes = await fetch(`${process.env.API_URL}`, settings);
		const data = await fetchRes.json();
		return data;
	} catch (error) {
		console.log(error);
	}
};

export const updatePost = async (id, data) => {
	try {
		await axios(`${process.env.API_URL}/${id}`, {
			method: "PATCH",
			data: data,
		});
	} catch (error) {
		console.log(error);
	}
};

export const deletePost = async (id) => {
	try {
		await axios.delete(`${process.env.API_URL}/${id}`);
	} catch (error) {
		console.log(error);
	}
};
