import React, { useState } from 'react';
import './TextArea.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const TextArea = ({ onChange, value = '', className, maxChar=500, placeholder }) => {
	const [charCount, setCharacterCount] = useState(value.length);
	const [isCharacterCountExceeded, setCharacterCountExceed] = useState(value.length > maxChar);
	const handleTextAreaChange = e => {
		setCharacterCount(e.target.value.length);
		setCharacterCountExceed(e.target.value.length > maxChar)
		onChange(e);
	};
	const css = classNames(
		'c-text-area',
		{'c-text-area--error': isCharacterCountExceeded},
		className
	);
	const charCountCss = classNames(
		'c-text-area_char_count',
		{'c-text-area--error': isCharacterCountExceeded},
	);
	return (
		<>
			<textarea className={css} onChange={handleTextAreaChange} value={value} placeholder={placeholder} />
			<span className={charCountCss}>
				<span>{charCount}</span>
				<span>/{maxChar} char.</span>
			</span>
		</>
	);
};

TextArea.propTypes = {
	value: PropTypes.string,
	className: PropTypes.string,
	onChange: PropTypes.func,
	maxChar: PropTypes.number,
	placeholder: PropTypes.string,
};

export default TextArea;
