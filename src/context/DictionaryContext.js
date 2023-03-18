import { createContext, useState } from 'react';

const DictionaryContext = createContext();

function ContextProvider({ children }) {
	const [word, setWord] = useState({});
	const [term, setTerm] = useState('keyboard'); // initial input field value. This value is send to Api, response is written into 'word'. Word is taken to display the content.
  const [modeLight, setMode] = useState(true);
  const [font, setFont] = useState('Mono');
	const valueToShare = {
		word,
		setWord,
    modeLight,
    setMode,
    font,
    setFont,
		term,
		setTerm,
	};
	return (
		<DictionaryContext.Provider value={valueToShare}>
			{children}
		</DictionaryContext.Provider>
	);
}

export { ContextProvider };
export default DictionaryContext;
