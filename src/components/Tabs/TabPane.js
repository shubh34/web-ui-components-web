import React from 'react';

import classNames from 'classnames';
import Icon from '../Icons/Icon';
import Button from '../Button/Button';

const TabPane = ({ id, name, onClick, isActive }) => {
	const buttonCss = classNames('c-tab-button', { 'c-tab-button--active': isActive });
	return (
		<li className='c-tab-pane'>
			<Button id={id} className={buttonCss} name={name} onClick={onClick}>
				<Icon name='dotted-line' />
			</Button>
		</li>
	);
};

TabPane.propTypes = {
	onClick: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	isActive: PropTypes.bool.isRequired
};

export default TabPane;
