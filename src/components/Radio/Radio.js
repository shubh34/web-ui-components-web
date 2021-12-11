/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Radio.scss';

import classNames from 'classnames';

const Radio = ({ id, className, value, name, checked, onChange, disabled }) => {
	const css = classNames('c-radio', className);
	return (
		<div className={css}>
			<input type='radio' id={id} name={name} onChange={onChange} checked={checked} value={value} disabled={disabled} />
			<label htmlFor={name}>{name}</label>
		</div>
	);
};



export default Radio;
