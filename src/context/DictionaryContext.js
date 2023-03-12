import { createContext, useState } from 'react';

const DictionaryContext = createContext();

function ContextProvider({ children }) {
	const [word, setWord] = useState('Klawiatura');
  const [modeLight, setMode] = useState(true);
  const [font, setFont] = useState('sansSerif')
	const valueToShare = {
		word,
		setWord,
    modeLight,
    setMode,
    font,
    setFont,
	};
	return (
		<DictionaryContext.Provider value={valueToShare}>
			{children}
		</DictionaryContext.Provider>
	);
}

export { ContextProvider };
export default DictionaryContext;
