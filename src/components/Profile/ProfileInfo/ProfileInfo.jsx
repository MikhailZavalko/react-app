import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
	
	if (!props.prolile) {
		return <Preloader />
	}

	return (
		<div>
			<div>
				<img src="https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg" />
			</div>
			<div className={s.descriptionBlock}>
				<img src={props.profile.photos.large} />
				ava + descr
    	</div>
		</div>
	)
}

export default ProfileInfo;