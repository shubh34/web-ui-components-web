/* eslint-disable react/button-has-type */
import React from 'react';
import './OnlineNow.scss'
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icons/Icon';

const OnlineNow = ({ className, name = 'Online Now' }) => {
	const css = classNames('c-online-now', className);
	return (
		<span id={name} className={css}>
			<Icon name='dot' />
			<span>{name}</span>
		</span>
	);
};

OnlineNow.propTypes = {
	id: PropTypes.string,
	checked: PropTypes.bool,
	className: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string
};

export default OnlineNow;
