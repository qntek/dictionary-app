function changeFont(obj, font) {
	obj.classList.remove('font-mono', 'font-serif', 'font-sans-serif');
	switch (font) {
		case 'Serif':
			obj.classList.add('font-serif');
			break;
		case 'SansSerif':
			obj.classList.add('font-sans-serif');
			break;
		default:
			obj.classList.add('font-mono');
			break;
	}
}

export default changeFont;
