import React from "react";
import ReactDOM from "react-dom";
import { Auth0Client } from "@auth0/auth0-spa-js";

// export const auth0 = new Auth0Client({
// 	domain: "dev-92p01f9z.us.auth0.com",
// 	client_id: "rvA4Q0rtyBELpPNwRPG4y2Q8qsN7immY",
// 	cacheLocation: "localstorage",
// 	useRefreshTokens: true,
// });

const App = () => {
	const auth0 = new Auth0Client({
		domain: "dev-92p01f9z.us.auth0.com",
		client_id: "rvA4Q0rtyBELpPNwRPG4y2Q8qsN7immY",
		cacheLocation: "localstorage",
		useRefreshTokens: true,
	});
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
