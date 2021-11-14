import { fillTextField } from "../utils/selectorFuncs";

chrome.storage.local.get(
	{
		reqtime: "",
		reqguard: "",
		details: "",
		sitename: "",
		sitestate: "",
		alarmtime: "",
		alarmpoint: "",
	},
	(res) => {
		PatrolLog(res);
		chrome.storage.local.clear();
	}
);

function PatrolLog(data) {
	fillTextField(document.querySelector('input[name$="REQDATE"]'), data.reqtime);
	selectDropdownPatrol(
		document.querySelectorAll('select[name$="REQGUARD"]'),
		data.reqguard
	);
	fillTextField(
		document.querySelector(
			'input[aria-labelledby$="SITENAME_LABEL"]',
			data.sitename
		)
	);
	selectDropdownPatrol(
		document.querySelectorAll('select[name$="SITESTATE"]'),
		data.sitestate
	);
	fillTextField(
		document.querySelector('input[aria-labelledby$="ALARMPOINT_LABEL"]'),
		data.alarmpoint
	);
	fillTextField(
		document.querySelector('input[name$="ALARMTIME"]'),
		data.alarmtime
	);
	fillTextField(
		document.querySelector('textarea[name$="PATROLREASON"]'),
		data.details
	);
}

function selectDropdownPatrol(field, value) {
	for (const entry of field.entries()) {
		const children = entry[1].childNodes;
		// console.log(children);
		const options = Array.prototype.filter.call(
			children,
			(option) => option.nodeType === Node.ELEMENT_NODE && option.text === value
		);
		// console.log(options);
		options[0].setAttribute("selected", "");
	}
}
