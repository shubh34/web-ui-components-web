import React from 'react';
import PropTypes from 'prop-types';

const TabHeaders = ({ children }) => <ul className='c-tab-header'>{children}</ul>;

TabHeaders.propTypes = {
	children: PropTypes.element.isRequired
};

export default TabHeaders;
