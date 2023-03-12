import { useContext, useEffect } from 'react';
import DictionaryContext from './context/DictionaryContext';
import classNames from 'classnames';
import TopBar from './components/TopBar';

function App() {
	const { modeLight } = useContext(DictionaryContext);
	const pageBody = document.querySelector('body');
	if (modeLight) {
		pageBody.classList.remove('body-dark');
		pageBody.classList.add('body-light');
	} else {
		pageBody.classList.add('body-dark');
		pageBody.classList.remove('body-light');
	}
	return (
		<div>
			<TopBar />
		</div>
	);
}

export default App;
