/* eslint-disable react/button-has-type */
import React from 'react';

import classNames from 'classnames';

const Badge = ({ className, name }) => {
	const css = classNames('c-badge', className);
	const a;
	return <span id={name} className={css}>{name}</span>;
};


export default Badge;
