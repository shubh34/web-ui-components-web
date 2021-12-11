import React from 'react';



const ScrollableItem = ({ children }) => (
	<div className="c-scrollable-item">
		{children}
	</div>

);

ScrollableItem.propTypes = {
	children: PropTypes.node.isRequired
};

export default ScrollableItem;
