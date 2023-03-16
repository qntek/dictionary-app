import { useContext } from 'react';
import DictionaryContext from '../context/DictionaryContext';
import Header from './Header';
import SingleDefinition from './SingleDefinition';
import iconNewWindow from '../assets/images/icon-new-window.svg';

function Definition() {
	const { modeLight, word } = useContext(DictionaryContext);

	const definitions = word.meanings.map((meaning) => {
		return (
			<SingleDefinition
				key={meaning.definitions[0].definition}
				meaning={meaning}
				modeLight={modeLight}
			/>
		);
	});

	return (
		<div className='container mt-5'>
			<Header />
			{definitions}
			<div className='border-top mt-4 pt-4 pb-5 mb-5 text-secondary'>
				<p className='synonyms text-underline-offset'>
					<span
						className={
							modeLight
								? 'fs-5 text-decoration-underline text-body-tertiary'
								: 'fs-5 text-decoration-underline text-white-50'
						}>
						Source
					</span>
					<span> </span>
					<a
						className={modeLight ? 'fs-5 text-decoration-none text-decoration-underline text-dark' : 'fs-5 text-decoration-none text-decoration-underline text-light'}
						href={word.sourceUrls[0]}
            target='_blank'
            rel="noreferrer">
						{word.sourceUrls[0]}
            <img className="ms-3 source-link-img" src={iconNewWindow} alt='' />
					</a>
				</p>
			</div>
		</div>
	);
}

export default Definition;
