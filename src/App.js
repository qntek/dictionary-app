import { useEffect, useState } from 'react';
import Context from './hooks/contextHook';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import ErrorMsg from './components/ErrorMsg';
import Definition from './components/Definition';
import toggleColors from './utilities/toggleColors';
import changeFont from './utilities/changeFont';
import Loading from './components/Loading';

function App() {
	const [fetchFailed, setFetchState] = useState(false); // true if axios get, failed
	const [isLoading, setIsLoading] = useState(false); // true if loading
	const { modeLight, font, word } = Context();
	const pageBody = document.querySelector('body');

	useEffect(() => {
		toggleColors(modeLight, pageBody);
		changeFont(pageBody, font);
	}, [modeLight, pageBody, font]);

	return (
		<div>
			<TopBar />
			<SearchBar
				setFetchState={setFetchState}
				setIsLoading={setIsLoading}
				isLoading={isLoading}
			/>
			{isLoading && <Loading />}
			{fetchFailed && <ErrorMsg />}
			{!fetchFailed && !isLoading && Object.keys(word).length !== 0 && (
				<Definition />
			)}
		</div>
	);
}

export default App;
