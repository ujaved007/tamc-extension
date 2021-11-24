import React from "react";
import { PrimaryBtn } from "../styles/Button.styles";

const LoginButton = () => {
	return (
		<PrimaryBtn
			onClick={() =>
				chrome.tabs.create({
					url: `${window.location.origin}/options.html`,
				})
			}
		>
			Options
		</PrimaryBtn>
	);
};

export default LoginButton;
