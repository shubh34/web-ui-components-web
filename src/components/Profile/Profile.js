/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/button-has-type */
import React from 'react';
import './Profile.scss';
import classNames from 'classnames';

import Icon from '../Icons/Icon';
import Button from '../Button/Button';


const Profile = ({ profile, type = 'medium', onCrossClick, isEditMode }) => {
	const css = classNames(
		'c-profile',
		`c-profile-${type}`
	);
	let profileImg = profile;
	if (profile) {
		try {
			profileImg = URL.createObjectURL(profile);
		} catch (e) {
			console.log(e);
		}
	}
	return (
		<div className={css}>
			{isEditMode && profile && (
				<Button onClick={onCrossClick} className='c-button-cross' type='link'>
					<Icon name='cross' />
				</Button>
			)}
			{profile && <img className="c-profile-img" src={profileImg} alt='Profile' />}
		</div>
	);
};


export default Profile;
