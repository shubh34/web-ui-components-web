import React from 'react';
import './SectionSubHeader.scss';


const SectionSubHeader = ({ header }) => <h5 className='c-sub-header'>{header}</h5>;

SectionSubHeader.propTypes = {
	header: PropTypes.string.isRequired
};

export default SectionSubHeader;
