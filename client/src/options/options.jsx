import React, { useState } from "react";
import ReactDOM from "react-dom";
import { auth0 } from "../utils/auth0";

import Theme from "../styles/theme";
import { ThemeProvider } from "styled-components";
import { PrimaryBtn } from "../styles/Button.styles";
import { Section, SigninCard, Heading, SubHeading } from "./Options.styles";

const App = () => {
	const [loginMessage, setLoginMessage] = useState("");

	const handleClick = async () => {
		await auth0.loginWithPopup();
		const user = await auth0.getUser();
		setLoginMessage(user.nickname);
	};

	return (
		<Section>
			<SigninCard>
				<Heading>{loginMessage.length === 0 ? `Click sign-in for secure sign-in.` : `Welcome ${loginMessage}`}</Heading>
				{loginMessage.length > 0 && <SubHeading>You can use the extension now</SubHeading>}
				<PrimaryBtn onClick={handleClick}>Sign In</PrimaryBtn>
			</SigninCard>
		</Section>
	);
};

const root = document.createElement("div");
document.body.appendChild(root);
ReactDOM.render(
	<ThemeProvider theme={Theme}>
		<App />
	</ThemeProvider>,
	root
);
