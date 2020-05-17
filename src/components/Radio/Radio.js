/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import './Radio.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Radio = ({ id, className, value, name, checked, onChange }) => {
	const css = classNames('c-radio', className);
	return (
		<div className={css}>
			<input type='radio' id={id} name={name} onChange={onChange} checked={checked} value={value} />
			<label htmlFor={name}>{name}</label>
		</div>
	);
};

Radio.propTypes = {
	id: PropTypes.string,
	checked: PropTypes.bool,
	className: PropTypes.string.isRequired,
	value: PropTypes.string || PropTypes.bool,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string
};

export default Radio;
