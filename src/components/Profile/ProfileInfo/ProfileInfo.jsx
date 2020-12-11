import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from "./ProfileStatus";
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = ({ profile, status, updateStatus }) => {

	if (!profile) {
		return <Preloader />
	}

	return (
		<div>
			<div className={s.descriptionBlock}>
				<img src={profile.photos.large} />
				<ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    	</div>
		</div>
	)
}

export default ProfileInfo;