import React from 'react';
import './SectionHeader.scss';
import classNames from 'classnames';


import Icon from '../Icons/Icon';

const SectionHeader = ({ header, iconName, isUnderLined = false, align }) => {
	const css = classNames('c-section-header',
		{ 'c-section-header-left': align === 'left' });
	return (
		<div className={css}>
			{iconName && (
				<div className='c-section-header-icon'>
					<Icon name={iconName} isActive iconSize='large' />
				</div>
			)}
			<h3>{header}</h3>
			{isUnderLined && <Icon name='dotted-line' />}
		</div>
	);
};

SectionHeader.propTypes = {
	align: PropTypes.string,
	header: PropTypes.string.isRequired,
	iconName: PropTypes.string,
	isUnderLined: PropTypes.bool
};

export default SectionHeader;
