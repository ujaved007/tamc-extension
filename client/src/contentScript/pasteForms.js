import { fillTextField, selectDropdownPatrol, selectDropdown } from "../utils/selectorFuncs";

chrome.storage.local.get(
	["reqtime", "reqguard", "details", "sitename", "sitestate", "alarmtime", "alarmpoint"],
	(res) => {
		PatrolLog(res);
		chrome.storage.local.remove(["reqtime", "reqguard", "details", "sitename", "sitestate", "alarmtime", "alarmpoint"]);
	}
);

function PatrolLog(data) {
	fillTextField(document.querySelector('input[name$="REQDATE"]'), data.reqtime);
	selectDropdown(document.querySelectorAll('select[name$="REQGUARD"]'), data.reqguard);
	fillTextField(document.querySelector('input[aria-labelledby$="SITENAME_LABEL"]'), data.sitename);
	selectDropdown(document.querySelectorAll('select[name$="SITESTATE"]'), data.sitestate);
	fillTextField(document.querySelector('input[aria-labelledby$="ALARMPOINT_LABEL"]'), data.alarmpoint);
	fillTextField(document.querySelector('input[name$="ALARMTIME"]'), data.alarmtime);
	fillTextField(document.querySelector('textarea[name$="PATROLREASON"]'), data.details);
}
