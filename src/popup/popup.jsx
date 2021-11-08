import React from "react";
import ReactDOM from "react-dom";
import GlobalStyles from "../styles/GlobalStyles";
import Theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import HomePage from "./HomePage";

const App = () => {
	return (
		<React.Fragment>
			<HomePage />
		</React.Fragment>
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
