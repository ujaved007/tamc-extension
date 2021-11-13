chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	const { closing, details, name, status, title } = request.data;

	chrome.storage.local.set({ closing, details, name, status, title });

	let tabID;
	chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
		let tabId = res[0].id;
		console.log(tabId);
		chrome.scripting.executeScript({
			target: { tabId: tabId },
			files: ["contentScript.js"],
		});
	});
	sendResponse({ msg: "message from background" });
});
