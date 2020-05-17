/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import './Accordian.scss';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../Button/Button';
import Icon from '../Icons/Icon';

const Accordian = ({ header, children, count, isSecondary }) => {
	const [isActive, setActiveState] = useState(true);
	const toggleAccordion = () => {
		setActiveState(!isActive);
	};
	const css = classNames('c-accordian', { 'c-accordian-secondary': isSecondary }, { 'c-accordian--active': isActive });
	return (
		<div className={css}>
			<Button className="c-accordian-button" type="large" onClick={toggleAccordion}>
				<span>{header}</span>
				<span className='c-accordian-count'>{count}</span>
				<Icon className="c-accordian-chevron" name='chevron' />
			</Button>
			{isActive && (
				<div className="c-accordian-panel">
					{children}
				</div>
			) }
		</div>
	);
};

Accordian.propTypes = {
	header: PropTypes.string,
	count: PropTypes.bool,
	isSecondary: PropTypes.bool,
	children: PropTypes.node.isRequired
};

export default React.memo(Accordian);
