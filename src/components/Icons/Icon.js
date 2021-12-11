/* eslint-disable max-len */
import React from 'react';
import './Icon.scss';

import classNames from 'classnames';
import { ReactComponent as IconChevron } from './chevron.svg';
import { ReactComponent as IconCross } from './cross.svg';
import { ReactComponent as IconDot } from './dot.svg';
import { ReactComponent as IconHome } from './home.svg';
import { ReactComponent as IconSetting } from './setting.svg';
import { ReactComponent as IconFaq } from './faq.svg';
import { ReactComponent as CreateEvent } from './createEvent.svg';
import { ReactComponent as Profile } from './profile.svg';
import { ReactComponent as IconFollow } from './FollowIcon.svg';
import IconUser from './IconUser';
import IconLoginLogo from './IconLoginLogo';
import IconDottedLine from './IconDottedLine';
import IconPassword from './IconPassword';
import IconMail from './IconMail';
import IconSuccess from './IconSuccess';

const Icon = ({ name = '', className = '', isActive = false, iconSize }) => {
	const iconToRender = {
		user: <IconUser />,
		'login-logo': <IconLoginLogo />,
		'dotted-line': <IconDottedLine />,
		mail: <IconMail />,
		success: <IconSuccess />,
		password: <IconPassword />,
		chevron: <IconChevron />,
		dot: <IconDot />,
		follow: <IconFollow />,
		cross: <IconCross />,
		home: <IconHome />,
		setting: <IconSetting />,
		faq: <IconFaq />,
		'create-event': <CreateEvent />,
		profile: <Profile />

	}[name] || null;
	const css = classNames(
		'c-icon',
		{ 'c-icon--medium': iconSize === 'medium' },
		{ 'c-icon--active': isActive },
		{ 'c-icon--large': iconSize === 'large' },
		`c-icon-${name}`,


		className
	);
	return <div className={css}>{iconToRender}</div>;
};

Icon.propTypes = {
	name: PropTypes.string,
	className: PropTypes.string,
	isActive: PropTypes.bool,
	iconSize: PropTypes.string
};
export default Icon;
