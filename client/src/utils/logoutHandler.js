import { auth0 } from "./auth0";
import { goTo } from "react-chrome-extension-router";
import SignInPage from "../popup/SignInPage";

export const logoutHandler = () => {
	auth0.logout({ federated: true, returnTo: goTo(SignInPage) });
	fetch(`https://${process.env.AUTH0_DOMAIN}/v2/logout?federated=true&client_id=${process.env.AUTH0_CLIENT_ID}`, {
		credentials: "include",
		mode: "no-cors",
	}).catch();
};
const logout = (options) => {
	logout(options);
	setAuthenticated(false);
};
