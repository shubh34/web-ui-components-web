/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ id, className, onClick, name, disabled, children, type = 'button', themed = true, badge = false }) => {
	const css = classNames(
		'c-button',
		{ 'c-button-badge': badge },
		{ 'c-button-large': type === 'large' },
		{ 'c-button-medium': type === 'medium' },
		{ 'c-button-link': type === 'link' },
		{ 'c-button-themed': themed },
		className
	);
	return (
		<button id={id} className={css} type='button' onClick={onClick} disabled={disabled}>
			{name}
			{children}
		</button>
	);
};

Button.propTypes = {
	id: PropTypes.string,
	disabled: PropTypes.bool,
	className: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string,
	type: PropTypes.string,
	children: PropTypes.element,
	themed: PropTypes.bool,
	badge: PropTypes.bool
};

export default Button;
