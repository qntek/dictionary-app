import { useContext } from 'react';
import DictionaryContext from '../context/DictionaryContext';

function ErrorMsg() {
	const { modeLight } = useContext(DictionaryContext);
	return (
		<div className='container'>
			<div className='row'>
				<div className='col-12 d-flex justify-content-center align-items-center my-5 pt-5'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='48'
						height='48'
						fill={modeLight ? '#050505' : '#a532fc'}
						className='bi bi-emoji-frown'
						viewBox='0 0 16 16'>
						<path d='M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
						<path d='M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z' />
					</svg>
				</div>
				<div className='col-12 text-center fs-3'>
					Something went wrong, please, try again.
				</div>
			</div>
		</div>
	);
}

export default ErrorMsg;
