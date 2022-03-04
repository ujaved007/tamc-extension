function copyTextField(field, key) {
	if (field) {
		let value = field.value;
		let obj = {};
		obj[key] = value;
		chrome.storage.local.set(obj);
	}
}

function copySpan(span, key) {
	let value = span.textContent;
	let obj = {};
	obj[key] = value;
	chrome.storage.local.set(obj);
}
//this grabs firstname and lastname from 2 fields and concats them
function copyName(field1, field2, key) {
	if (field1 && field2) {
		let value = `${field1.value} ${field2.value}`;
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
			(option) => option.nodeType === Node.ELEMENT_NODE && option.selected === true
		);
		let value = options[0].text;
		let obj = {};
		obj[key] = value;
		chrome.storage.local.set(obj);
	}
}

function copyForm() {
	//for patrol dispatch
	copyTextField(document.querySelector('input[name$="REQTIME"]'), "reqtime");
	copyDropdown(document.querySelectorAll('select[name$="REQGUARD"]'), "reqguard");
	copyTextField(document.querySelector('textarea[name$="DETAILS"]'), "details");
	copyTextField(document.querySelector('input[aria-labelledby$="SITENAME_LABEL"]'), "sitename");
	copyDropdown(document.querySelectorAll('select[name$="SITESTATE"]'), "sitestate");
	copyTextField(document.querySelector('input[name$="ALARMTIME"]'), "alarmtime");
	copyTextField(document.querySelector('input[aria-labelledby$="ALARM_POINT_LABEL"]'), "alarmpoint");
	//for faulty list
	copyTextField(document.querySelector('textarea[name$="SPECIFIC_LOCATION"]'), "alarmpoint");
	copyTextField(document.querySelector('textarea[name$="REQUEST_DESCRIPTION"]'), "details");
	copySpan(document.querySelector('span[id$="SITE_NAME_DISPLAY"]'), "sitename");
	copyName(
		document.querySelector('input[name$="FIRST_NAME"]'),
		document.querySelector('input[name$="LAST_NAME"]'),
		"reqguard"
	);
}
copyForm();
