chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	if (request.msg === "autofill daily log") {
		const { closing, details, status, title } = request.data;
		chrome.storage.local.set({ closing, details, status, title });
		chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
			let tabId = res[0].id;
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ["dailyLogFiller.js"],
			});
		});
		sendResponse("autofilled daily log");
	}
	if (request.msg === "copy form") {
		chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
			let tabId = res[0].id;
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ["copyForms.js"],
			});
		});
		sendResponse("copied form");
	}
	if (request.msg === "paste form") {
		chrome.tabs.query({ active: true, currentWindow: true }, (res) => {
			let tabId = res[0].id;
			chrome.scripting.executeScript({
				target: { tabId: tabId },
				files: ["pasteForms.js"],
			});
		});
		sendResponse("pasted form");
	}
	return true;
});
