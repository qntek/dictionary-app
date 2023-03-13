import { useContext, useEffect } from 'react';

import DictionaryContext from './context/DictionaryContext';
// import classNames from 'classnames';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import toggleColors from './utilities/toggleColors';
import changeFont from './utilities/changeFont';
function App() {
	
	const { modeLight, font } = useContext(DictionaryContext);
	const pageBody = document.querySelector('body');

	useEffect(() => {
		toggleColors(modeLight, pageBody);
		changeFont(pageBody, font);
	}, [modeLight, pageBody, font]);

	return (
		<div>
			<TopBar />
			<SearchBar/>
		</div>
	);
}

export default App;
