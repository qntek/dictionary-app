function toggleColors(modeLight, obj) {
	//TopBar component can change color mode
	if (modeLight) {
		obj.classList.remove('body-dark');
		obj.classList.add('body-light');
	} else {
		obj.classList.add('body-dark');
		obj.classList.remove('body-light');
	}
}

export default toggleColors;