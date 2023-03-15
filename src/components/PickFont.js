import { useContext, useRef } from 'react';

import DictionaryContext from '../context/DictionaryContext';
import toggleMenu from '../utilities/toggleMenu';
import arrow from '../assets/images/icon-arrow-down.svg';

function PickFont() {
	const { modeLight, setFont } = useContext(DictionaryContext);
	const options = [
		{ value: 'Mono', label: 'Mono' },
		{ value: 'Serif', label: 'Serif' },
		{ value: 'SansSerif', label: 'SansSerif' },
	];

	const pick = useRef();
	const menu = useRef();
	const arrowImg = useRef();
	const one = useRef();

	const handleClick = (name) => {
		setFont(name);
		one.current.innerText = name;
	};

	let classes;
	modeLight
		? (classes = 'fs-4 pick-font-select shadow-light')
		: (classes = 'fs-4 pick-font-select shadow-dark background-dark');
	return (
		<div
			ref={pick}
			className='pick-font-container mt-3 fs-5'
			onClick={() => {
				toggleMenu(menu);
				toggleMenu(arrowImg);
			}}>
			<p className='font-option fs-2'>
				<span ref={one}>Mono</span>
				<span>
					<img ref={arrowImg} className='ms-3' src={arrow} alt='' />
				</span>
			</p>
			<div ref={menu} className={classes}>
				<p
					className='fs-3 font-option font-mono'
					onClick={() => handleClick('Mono')}>
					{options[0].label}
				</p>
				<p
					className='fs-3 font-option font-serif'
					onClick={() => handleClick('Serif')}>
					{options[1].label}
				</p>
				<p
					className='fs-3 font-option font-sans-serif'
					onClick={() => handleClick('SansSerif')}>
					{options[2].label}
				</p>
			</div>
		</div>
	);
}

export default PickFont;
