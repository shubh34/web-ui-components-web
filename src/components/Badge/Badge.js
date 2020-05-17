/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ className, name }) => {
	const css = classNames('c-badge', className);
	return <span id={name} className={css}>{name}</span>;
};

Badge.propTypes = {
	id: PropTypes.string,
	checked: PropTypes.bool,
	className: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string
};

export default Badge;
