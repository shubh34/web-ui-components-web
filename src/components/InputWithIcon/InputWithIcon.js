/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import './InputWithIcon.scss';
import classNames from 'classnames';

import Icon from '../Icons/Icon';

const InputWithIcon = ({ id, className, iconName, placeholder, type = 'text', disabled, value = '', name = 'input', onBlur = () => { }, onChange = () => { } }) => {
	const isActive = value.length;
	const css = classNames('input-container', { 'input-container--active': isActive }, className);
	return (
		<div className={css}>
			{iconName && <Icon name={iconName} isActive={isActive} />}
			<input id={id} className='c-input' name={name} onChange={onChange} placeholder={placeholder} type={type} disabled={disabled} value={value} onBlur={onBlur} />
		</div>
	);
};



export default InputWithIcon;
