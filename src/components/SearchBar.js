import { useContext, useState, useRef } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import DictionaryContext from '../context/DictionaryContext';
import iconSearch from '../assets/images/icon-search.svg';

function SearchBar() {
	const [isLoading, setIsLoading] = useState(false);
	const [term, setTerm] = useState('');
	const { modeLight, setWord } = useContext(DictionaryContext);
	const form = useRef();
	const errMsg = useRef();
	let classes;

	modeLight
		? (classes = 'search-bar search-bar-light')
		: (classes = 'search-bar search-bar-dark');

	const handleEmptyBar = () => {
		errMsg.current.classList.remove('d-none');
		form.current.classList.add('search-bar-error');
		setTimeout(() => {
			errMsg.current.classList.add('d-none');
			form.current.classList.remove('search-bar-error');
		}, 2000);
	};

	const search = async (e) => {
		e.preventDefault();
		if (!term) {
			handleEmptyBar();
			return;
		}
		setIsLoading(true);
		const lookedTerm = `https://api.dictionaryapi.dev/api/v2/entries/en/${term.toLowerCase()}`;
		const answer = await axios.get(lookedTerm).catch((err) => {
			console.log('Failed to fetch: ' + err);
			setIsLoading(false);
		});
		setIsLoading(false);
		if (answer && answer.status === 200)
			setWord(JSON.parse(answer.request.response)[0]);
	};

	return (
		<div className='position-relative'>
			<form onSubmit={(e) => search(e)}>
				<label htmlFor='searchInput' className='form-label d-none'>
					Searched word:
				</label>
				<input
					value={term}
					ref={form}
					type='text'
					className={classes}
					id='searchInput'
					placeholder='Search...'
					onChange={() => setTerm(form.current.value)}
				/>
				<div
					ref={errMsg}
					className='position-absolute top-100 start-0 ps-2 pt-2 fs-5 text-danger d-none'>
					Whoops, can't be empty.
				</div>
				<div className='position-absolute top-50 end-0 translate-middle btn'>
					{isLoading ? (
						<ClipLoader
							aria-label='Loading Spinner'
							size={20}
							color={'#a532fc'}
							className='spinner'
						/>
					) : (
						<img src={iconSearch} alt='' onClick={search} />
					)}
				</div>
			</form>
		</div>
	);
}

export default SearchBar;
