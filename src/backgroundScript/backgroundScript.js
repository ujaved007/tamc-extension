chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
	console.log(request);
	sendResponse({ msg: "message from background" });
});
