chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.msg === "autofill daily log") {
		const { closing, details, name, status, title } = request.data;

		chrome.storage.local.set({ closing, details, name, status, title });

		chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
			let tabId = res[0].id;
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ["dailyLogFiller.js"],
			});
		});
	} else if (request.msg === "copy form") {
		chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
			let tabId = res[0].id;
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ["copyForms.js"],
			});
		});
	} else if (request.msg === "paste form") {
		chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
			let tabId = res[0].id;
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ["pasteForms.js"],
			});
		});
	}
	sendResponse({ msg: "message from background" });
});
