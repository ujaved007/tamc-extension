import React from "react";

const LoginButton = () => {
	return (
		<button
			onClick={() =>
				chrome.tabs.create({
					url: `${window.location.origin}/options.html`,
				})
			}
		>
			Log In
		</button>
	);
};

export default LoginButton;
