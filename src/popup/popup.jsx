import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { Router } from "react-chrome-extension-router";

import HomePage from "./HomePage";
import EditPage from "./EditPage";
import AddPage from "./AddPage";

const App = () => {
	return (
		<Router>
			<HomePage />
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
