/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';


const InputField = ({ id, className, placeholder, type = 'text', disabled, value, name = 'input', onBlur = () => { }, onChange = () => { } }) => (
	<input id={id} name={name} onChange={onChange} placeholder={placeholder} type={type} className={className} disabled={disabled} value={value} onBlur={onBlur} />
);

InputField.propTypes = {
	id: PropTypes.string.isRequired,
	className: PropTypes.string.isRequired,
	placeholder: PropTypes.string,
	onChange: PropTypes.func,
	onBlur: PropTypes.func,
	name: PropTypes.string,
	disabled: PropTypes.bool,
	type: PropTypes.string,
	value: PropTypes.string
};

export default InputField;
