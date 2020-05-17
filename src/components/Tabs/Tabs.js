import React from 'react';
import './Tab.scss';
import PropTypes from 'prop-types';

const Tabs = ({ children }) => <div className='c-tab'>{children}</div>;

Tabs.propTypes = {
	children: PropTypes.element.isRequired
};

export default Tabs;
