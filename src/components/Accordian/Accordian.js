/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import "../Button/Button.scss";
import './Accordian.scss';

import classNames from 'classnames';
import Button from '../Button/Button';
import Icon from '../Icons/Icon';

const Accordian = ({ id, header, children, count, isSecondary, defaultActive = false }) => {
	const [isActive, setActiveState] = useState(defaultActive);
	const toggleAccordion = () => {
		setActiveState(!isActive);
	};
	const css = classNames('c-accordian', { 'c-accordian-secondary': isSecondary }, { 'c-accordian--active': isActive });
	return (
		<div className={css} id={id}>
			<Button id={`c-accordian-button-${id}`} type="large" onClick={toggleAccordion} className="c-accordian-button" >
				<span>{header}</span>
				<span className='c-accordian-count'>{count}</span>
				<Icon className="c-accordian-chevron" name='chevron' />
			</Button>
			{isActive && (
				<div className="c-accordian-panel">
					{children}
				</div>
			)}
		</div>
	);
};


export default Accordian;
