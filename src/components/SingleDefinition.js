function SingleDefinition({ meaning, modeLight }) {
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
	const synonyms = meaning.synonyms.join(`  `);
	return (
		<div className='container px-0 mt-3'>
			<div className='d-flex mt-3'>
				<div className='d-flex align-items-center align-items-center '>
					<p className='response-meaning-speech-part mb-0 fs-1'>
						{meaning.partOfSpeech}
					</p>
				</div>
				<div className='flex-column container'>
					<div className='box-50'></div>
				</div>
			</div>
			<p className='response-meaning-title fs-2'>Meaning</p>
			<ul className='response-meaning-ul fs-3'>{definitions}</ul>
			{synonyms ? (
				<div className='d-flex mb-4'>
					<div className='response-meaning-title fs-2'>Synonyms</div>
					<div className='response-meaning-title text-mark-color fw-bold ms-4 fs-2'>
						{synonyms}
					</div>
				</div>
			) : null}
		</div>
	);
}

export default SingleDefinition;
