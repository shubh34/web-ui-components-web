import React from 'react';


const TabHeaders = ({ children }) => <ul className='c-tab-header'>{children}</ul>;

TabHeaders.propTypes = {
	children: PropTypes.element.isRequired
};

export default TabHeaders;
