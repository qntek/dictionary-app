import { useContext, useEffect, useState } from 'react';

import DictionaryContext from './context/DictionaryContext';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import ErrorMsg from './components/ErrorMsg';
import Header from './components/Header';
import toggleColors from './utilities/toggleColors';
import changeFont from './utilities/changeFont';

function App() {
	const [fetchFailed, setFetchState] = useState(false); // true if axios get, failed
	const { modeLight, font } = useContext(DictionaryContext);
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
			{!fetchFailed && <Header/>}

		</div>
	);
}

export default App;
