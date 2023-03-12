import { useContext } from 'react';
import DictionaryContext from '../context/DictionaryContext';

import logo from '../assets/images/logo.svg';
import moonIcon from '../assets/images/icon-moon.svg';

function TopBar() {
	const { modeLight, setMode } = useContext(DictionaryContext);

	const handleModeChange = () => {
		setMode(!modeLight);
	};

	return (
		<div className='d-flex justify-content-between my-5 pt-5'>
			<div>
				<img src={logo} alt='' className='img-logo' />
			</div>
			<div className='d-flex justify-content-evenly align-items-center'>
				<div>Wybierz czcionke</div>
				<div className='form-check form-switch border-start py-2 ms-5'>
					<input
						className='form-check-input ms-1'
						type='checkbox'
						role='switch'
						id='flexSwitchCheckChecked'
						onChange={handleModeChange}
					/>
					<label
						className='form-check-label d-none'
						htmlFor='flexSwitchCheckChecked'>
						Checked switch checkbox input
					</label>
				</div>
				<img src={moonIcon} alt='' className='img-moon ms-4' />
			</div>
		</div>
	);
}

export default TopBar;
