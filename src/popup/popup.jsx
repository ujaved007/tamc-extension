import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { Router } from "react-chrome-extension-router";
import { Auth0Client } from "@auth0/auth0-spa-js";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";

const App = () => {
	const [authenticated, setAuthenticated] = useState(false);

	const auth0 = new Auth0Client({
		domain: process.env.AUTH0_DOMAIN,
		client_id: process.env.AUTH0_CLIENT_ID,
		cacheLocation: "localstorage",
		useRefreshTokens: true,
	});

	const checkAuthentication = async () => {
		await auth0.isAuthenticated().then((res) => setAuthenticated(res));
	};
	checkAuthentication();

	return (
		<Router>
			<div>{authenticated ? <HomePage /> : <SignInPage />}</div>
		</Router>
	);
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<GlobalStyles />
		<App />
	</ThemeProvider>,
	root
);
