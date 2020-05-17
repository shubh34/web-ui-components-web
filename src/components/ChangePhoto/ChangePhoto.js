import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

const ChangePhoto = ({ onChange, hasProfile }) => {
	const inputFile = useRef(null);
	const handleProfileChange = (event) => {
		onChange(event);
	};
	const onButtonClick = () => {
		inputFile.current.click();
	};
	const buttonName = hasProfile ? 'Change Photo' : 'Add Photo';
	return (
		<>
			<input ref={inputFile} hidden type="file" onChange={handleProfileChange} accept="image/jpg, image/jpeg, image/png" />
			<Button type="link" name={buttonName} id={buttonName} onClick={onButtonClick} />
		</>
	);
};
ChangePhoto.propTypes = {
	onChange: PropTypes.func,
	hasProfile: PropTypes.bool
};

export default ChangePhoto;
