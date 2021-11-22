import React from "react";
import LoginButton from "./Login";

import { PageCentre, MainHeading, Caption } from "../styles/SignInPage.styles";

const SignInPage = () => {
	return (
		<PageCentre>
			<MainHeading>Please Sign-in to continue</MainHeading>
			<Caption>Proceed to Options page for sign-in</Caption>
			<LoginButton />
		</PageCentre>
	);
};

export default SignInPage;
