import { useContext } from 'react';
import DictionaryContext from '../context/DictionaryContext';
import PickFont from './PickFont';
import logo from '../assets/images/logo.svg';
import moonIcon from '../assets/images/icon-moon.svg';

function TopBar() {
	const { modeLight, setMode } = useContext(DictionaryContext);

	const handleModeChange = () => {
		setMode(!modeLight);
	};
	let moonIconClasses
	modeLight ? moonIconClasses='img-moon ms-4' : moonIconClasses='img-moon ms-4 text-mark-color'
	return (
		<div className='d-flex justify-content-between my-4 pt-2'>
			<div>
				<img src={logo} alt='' className='img-logo' />
			</div>
			<div className='d-flex justify-content-evenly align-items-center'>
				<PickFont />
				<div className='form-check form-switch border-start py-2 ms-4'>
					<input
						className='form-check-input'
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
				<img src={moonIcon} alt='' className={moonIconClasses}/>
			</div>
		</div>
	);
}

export default TopBar;
