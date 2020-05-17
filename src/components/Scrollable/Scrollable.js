import React from 'react';
import './Scrollabel.scss';
import PropTypes from 'prop-types';


const Scrollabel = ({ children }) => (
	<div className="c-scrollable">
		{children}
	</div>

);

Scrollabel.propTypes = {
	children: PropTypes.node.isRequired
};

export default Scrollabel;
