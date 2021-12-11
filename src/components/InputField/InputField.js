/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';


const InputField = ({ id, className, placeholder, type = 'text', disabled, value, name = 'input', onBlur = () => { }, onChange = () => { } }) => (
	<input id={id} name={name} onChange={onChange} placeholder={placeholder} type={type} className={className} disabled={disabled} value={value} onBlur={onBlur} />
);



export default InputField;
