import Context from '../hooks/contextHook';

function SingleDefinition({ meaning, modeLight }) {
	const { setTerm } = Context(); // used to update value of searched term, when synonym is clicked.
	const definitions = meaning.definitions.map((definition) => {
		return (
			<div key={definition.definition}>
				<li>
					<span className={modeLight ? 'text-mode-light' : 'text-mode-dark'}>
						{definition.definition}
					</span>
				</li>
				<p className='response-meaning-example-text'>
					{definition.example ? `"${definition.example}"` : null}
				</p>
			</div>
		);
	});

	const synonyms = meaning.synonyms.map((synonym) => {
		return (
			<p key={synonym} className='cursor-pointer d-inline me-4'>
				{synonym}
			</p>
		);
	});

	function showSynonymsDef(e) {
		const icon = document.querySelector('#search-icon');
		window.scrollTo(0, 0);
		setTerm(e.target.innerText);
		setTimeout(() => icon.click(), 150);
	}

	return (
		<div className='container px-0 mt-3'>
			<div className='d-flex mt-3'>
				<div className='d-flex align-items-center align-items-center '>
					<p className='response-meaning-speech-part mb-0 fs-1'>
						{meaning.partOfSpeech}
					</p>
				</div>
				<div className='flex-column container pe-0'>
					<div className='box-50'></div>
				</div>
			</div>
			<p className='response-meaning-title fs-2'>Meaning</p>
			<ul className='response-meaning-ul fs-3'>{definitions}</ul>
			{synonyms ? (
				<div className='d-flex mb-4'>
					<div className='response-meaning-title fs-2'>Synonyms</div>
					<div
						className='d-flex synonyms response-meaning-title text-mark-color fw-bold ms-4 fs-2'
						onClick={(e) => showSynonymsDef(e)}>
						{synonyms}
					</div>
				</div>
			) : null}
		</div>
	);
}

export default SingleDefinition;
