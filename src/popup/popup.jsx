import React, { useState } from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { Router } from "react-chrome-extension-router";
import { auth0 } from "../utils/auth0";
import HomePage from "./HomePage";
import SignInPage from "./SignInPage";

const App = () => {
	const [authenticated, setAuthenticated] = useState(false);

	const checkAuthentication = async () => {
		await auth0.isAuthenticated().then((res) => setAuthenticated(res));
	};
	checkAuthentication();
	return (
		<Router>
			<div>{authenticated ? <HomePage setAuthenticated={setAuthenticated} /> : <SignInPage />}</div>
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
