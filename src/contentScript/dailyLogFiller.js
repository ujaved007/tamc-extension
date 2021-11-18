import { fillTextField, selectDropdown } from "../utils/selectorFuncs";

chrome.storage.local.get(["title", "details", "closing", "status"], (res) => {
	DailyLog(res);
	chrome.storage.local.clear();
});

function DailyLog(data) {
	selectDropdown(document.querySelectorAll('select[name$="REQTYPE"]'), data.title);
	fillTextField(document.querySelector('textarea[name$="DETAILS"]'), data.details);
	selectDropdown(document.querySelectorAll('select[name$="CLOSINGGUARD"]'), data.closing);
	selectDropdown(document.querySelectorAll('select[name$="STATUS"]'), data.status);
}
