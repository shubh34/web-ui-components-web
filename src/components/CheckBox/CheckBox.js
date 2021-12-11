/* eslint-disable react/button-has-type */
import React from 'react';

import classNames from 'classnames';

const CheckBox = ({ id, className, value, name, checked, onChange }) => {
	const css = classNames('c-checkbox', className);
	return <input className={css} type='checkbox' id={id} name={name} value={value} checked={checked} onChange={onChange} />;
};

CheckBox.propTypes = {
	id: PropTypes.string,
	checked: PropTypes.bool,
	className: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string
};

export default CheckBox;
