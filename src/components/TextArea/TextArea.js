import React, { useState } from 'react';
import './TextArea.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = ({ onChange, value = '', className }) => {
	const css = classNames(
		'c-text-area',
		className
	);
	const [charCount, setCharacterCount] = useState(value.length);
	const handleTextAreaChange = e => {
		setCharacterCount(e.target.value.length);
		onChange(e);
	};
	return (
		<>
			<textarea className={css} onChange={handleTextAreaChange} value={value} />
			<p className="c-text-area_char_count">
				<span>{charCount}</span>
				<span>/500 char.</span>
			</p>
		</>
	);
};

TextArea.propTypes = {
	value: PropTypes.string,
	className: PropTypes.string,
	onChange: PropTypes.func
};

export default TextArea;
