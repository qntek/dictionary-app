const toggleMenu = (obj) => {
	const element = obj.current.classList;

	let open;
	let close;

	switch (obj.current.nodeName) {
		case 'DIV':
			open = 'menu-open';
			close = 'menu-close';
			break;
		case 'IMG':
			open = 'arrow-opened';
			close = 'arrow-closed';
			break;
		default:
			throw new Error('Could not find current class name.');
	}

	if (element.contains(open)) {
		element.remove(open);
		element.add(close);
	} else if (element.contains(close)) {
		element.remove(close);
		element.add(open);
	} else element.add(open);
};

export default toggleMenu;
