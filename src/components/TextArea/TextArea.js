import React, { useState } from 'react';
import './TextArea.scss';
import classNames from 'classnames';


const TextArea = ({ onChange, value = '', className, maxChar = 500, placeholder }) => {
	const [charCount, setCharacterCount] = useState(value.length);
	const [isCharacterCountExceeded, setCharacterCountExceed] = useState(value.length > maxChar);
	const handleTextAreaChange = e => {
		setCharacterCount(e.target.value.length);
		setCharacterCountExceed(e.target.value.length > maxChar)
		onChange(e);
	};
	const css = classNames(
		'c-text-area',
		{ 'c-text-area--error': isCharacterCountExceeded },
		className
	);
	const charCountCss = classNames(
		'c-text-area_char_count',
		{ 'c-text-area--error': isCharacterCountExceeded },
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


export default TextArea;
