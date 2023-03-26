import { useEffect, useState } from 'react';
import Context from './hooks/contextHook';
import TopBar from './components/TopBar';
import SearchBar from './components/SearchBar';
import ErrorMsg from './components/ErrorMsg';
import Definition from './components/Definition';
import Loading from './components/Loading';
import toggleColors from './utilities/toggleColors';
import changeFont from './utilities/changeFont';

function App() {
	const [fetchFailed, setFetchState] = useState(false); // true if axios get, failed
	const [isLoading, setIsLoading] = useState(false); // true if loading
	const { modeLight, font, word, setWord, setTerm } = Context();
	const pageBody = document.querySelector('body');

	useEffect(() => {
		const eventHandler = (e) => {
			if (window.history.state) {
				setWord(window.history.state.state);
				setTerm(window.history.state.state.word);
			}
		};
		toggleColors(modeLight, pageBody);
		changeFont(pageBody, font);
		window.addEventListener('popstate', eventHandler);
		return () => window.removeEventListener('popstate', eventHandler);
	}, [modeLight, pageBody, font, setWord, setTerm]);

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
