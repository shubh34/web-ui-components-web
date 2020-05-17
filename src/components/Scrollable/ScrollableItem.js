import React from 'react';
import PropTypes from 'prop-types';


const ScrollableItem = ({ children }) => (
	<div className="c-scrollable-item">
		{children}
	</div>

);

ScrollableItem.propTypes = {
	children: PropTypes.node.isRequired
};

export default ScrollableItem;
