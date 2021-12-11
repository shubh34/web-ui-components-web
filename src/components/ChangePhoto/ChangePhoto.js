import React, { useRef } from 'react';
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

export default ChangePhoto;
