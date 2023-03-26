import { useRef, useEffect } from 'react';
import { ClipLoader } from 'react-spinners';
import axios from 'axios';
import Context from '../hooks/contextHook';
import iconSearch from '../assets/images/icon-search.svg';

function SearchBar({ setFetchState, setIsLoading, isLoading }) {
	const { modeLight, setWord, term, setTerm } = Context();
	const form = useRef();
	const errMsg = useRef();
	let classes;

	useEffect(() => {
		search();
	}, []);

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

	async function search(e) {
		if (e) e.preventDefault();
		const lookedTerm = `https://api.dictionaryapi.dev/api/v2/entries/en/${term.toLowerCase()}`;

		if (!term) {
			handleEmptyBar();
			return;
		}

		setIsLoading(true);
		let answer = null;
		try {
			answer = await axios.get(lookedTerm);
		} catch (err) {
			answer = err.response;
			setFetchState(true);
		} finally {
			setIsLoading(false);
		}

		if (answer && answer.status === 200) setFetchState(false);
		const newWord = JSON.parse(answer.request?.response)[0];
		setWord(newWord);
		window.history.pushState({ state: newWord }, '');
		if (answer && answer.status >= 400) {
			setFetchState(true);
		}
	}

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
					autoComplete='off'
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
						<img id='search-icon' src={iconSearch} alt='' onClick={search} />
					)}
				</div>
			</form>
		</div>
	);
}

export default SearchBar;
