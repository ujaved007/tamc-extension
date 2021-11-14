function copyTextField(field, key) {
	if (field) {
		let value = field.value;
		let obj = {};
		obj[key] = value;
		chrome.storage.local.set(obj);
	}
}

function copyDropdown(field, key) {
	for (const entry of field.entries()) {
		const children = entry[1].childNodes;
		const options = Array.prototype.filter.call(
			children,
			(option) =>
				option.nodeType === Node.ELEMENT_NODE && option.selected === true
		);
		let value = options[0].text;
		let obj = {};
		obj[key] = value;
		chrome.storage.local.set(obj);
	}
}

copyTextField(document.querySelector('input[name$="REQTIME"]'), "reqtime");
copyDropdown(document.querySelectorAll('select[name$="REQGUARD"]'), "reqguard");
copyTextField(document.querySelector('textarea[name$="DETAILS"]'), "details");
copyTextField(
	document.querySelector('input[aria-labelledby$="SITENAME_LABEL"]'),
	"sitename"
);
copyDropdown(
	document.querySelectorAll('select[name$="SITESTATE"]'),
	"sitestate"
);
copyTextField(document.querySelector('input[name$="ALARMTIME"]'), "alarmtime");
copyTextField(
	document.querySelector('input[aria-labelledby$="ALARM_POINT_LABEL"]'),
	"alarmpoint"
);
