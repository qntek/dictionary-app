import { useContext } from 'react';
import DictionaryContext from '../context/DictionaryContext';

import iconPlay from '../assets/images/icon-play.svg';

function Header() {
	const { word } = useContext(DictionaryContext);

	const title = word.word;
	const phonetic = word.phonetic;
	let audioUrl = '';
	if (word.phonetics) {
		word.phonetics.forEach((pos) => {
			if (pos.audio) {
				audioUrl = pos.audio;
			}
		});
	}

	const playAudio = () => {
		if (!audioUrl) return;
		try {
			new Audio(audioUrl).play();
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='d-flex justify-content-between align-items-center mt-2 pt-3'>
			<div className='flex-column justify-items-start'>
				<p className='response-title lh-1'>{title}</p>
				<p className='response-phonetic lh-1'>{phonetic}</p>
			</div>
			<div className='d-flex justify-content-between align-self-start'>
				<button className='response-play-btn'>
					<img src={iconPlay} alt='play' onClick={playAudio} />
				</button>
			</div>
		</div>
	);
}

export default Header;
