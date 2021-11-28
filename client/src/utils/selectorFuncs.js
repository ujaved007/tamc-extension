function fillTextField(field, value) {
	if (field) {
		field.value = value;
	}
}

function selectDropdown(field, value) {
	for (const entry of field.entries()) {
		const children = entry[1].childNodes;
		const options = Array.prototype.filter.call(
			children,
			(option) => option.nodeType === Node.ELEMENT_NODE && option.text === value
		);
		if (!options.length) return;
		options[0].removeAttribute("selected");
		options[0].setAttribute("selected", "");
	}
}
function selectDropdownPatrol(field, value) {
	for (const entry of field.entries()) {
		const children = entry[1].childNodes;
		const options = Array.prototype.filter.call(
			children,
			(option) => option.nodeType === Node.ELEMENT_NODE && option.text === value
		);
		options[0].setAttribute("selected", "");
	}
}
export { fillTextField, selectDropdown, selectDropdownPatrol };
