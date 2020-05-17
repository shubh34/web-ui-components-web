/* eslint-disable react/button-has-type */
import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Button = ({ id, className, onClick, name, disabled, children, type, themed = true, badge = false }) => {
	const css = classNames(
		'c-button',
		{ 'c-button-themed': themed },
		{ 'c-button-badge': badge },
		{ 'c-button-large': type === 'large' },
		{ 'c-button-medium': type === 'medium' },
		{ 'c-button-link': type === 'link' },
		className,
	);
	return (
		<button id={id} className={css} type='button' onClick={onClick} disabled={disabled}>
			{name}
			{children}
		</button>
	);
};

Button.propTypes = {
	id: PropTypes.string.isRequired,
	disabled: PropTypes.bool,
	className: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	type:  PropTypes.oneOf(['large', 'medium', 'link']),
	children: PropTypes.element,
	themed: PropTypes.bool,
	badge: PropTypes.bool
};

export default Button;
