import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import { ContextProvider } from './context/DictionaryContext';
import "bootstrap/dist/css/bootstrap.min.css"
import './styles/index.scss';

const el = document.getElementById('root');
el.classList.add('container-md')
const root = ReactDOM.createRoot(el);
root.render(
	<React.StrictMode>
		<ContextProvider>
			<App />
		</ContextProvider>
	</React.StrictMode>
);
