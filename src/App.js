import { useContext, useEffect, useState } from 'react';

import DictionaryContext from './context/DictionaryContext';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import ErrorMsg from './components/ErrorMsg';
import Definition from './components/Definition';
import toggleColors from './utilities/toggleColors';
import changeFont from './utilities/changeFont';

function App() {
	const [fetchFailed, setFetchState] = useState(false); // true if axios get, failed
	const { modeLight, font, word } = useContext(DictionaryContext);
	const pageBody = document.querySelector('body');

	useEffect(() => {
		toggleColors(modeLight, pageBody);
		changeFont(pageBody, font);
	}, [modeLight, pageBody, font]);

	return (
		<div>
			<TopBar />
			<SearchBar setFetchState={setFetchState}/>
			{fetchFailed && <ErrorMsg/>}
			{(!fetchFailed && Object.keys(word).length !== 0) && <Definition/>}

		</div>
	);
}

export default App;
