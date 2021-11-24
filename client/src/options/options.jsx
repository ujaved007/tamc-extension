import React from "react";
import ReactDOM from "react-dom";
import { auth0 } from "../utils/auth0";

const App = () => {
	const handleClick = async () => {
		await auth0.loginWithPopup();
		const user = await auth0.getUser();
		console.log(user);
	};
	return <button onClick={handleClick}>Log In</button>;
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(<App />, root);
