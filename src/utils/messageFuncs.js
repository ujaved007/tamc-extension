export const handleListClick = (data) => {
	chrome.runtime.sendMessage(
		{
			msg: "autofill daily log",
			data: data,
		},
		(response) => {
			if (response) {
				console.log(response);
			}
		}
	);
};
export const handleCopy = () => {
	chrome.runtime.sendMessage(
		{
			msg: "copy form",
		},
		(response) => {
			if (response) {
				console.log(response);
			}
		}
	);
};
export const handlePaste = () => {
	chrome.runtime.sendMessage(
		{
			msg: "paste form",
		},
		(response) => {
			if (response) {
				console.log(response);
			}
		}
	);
};
