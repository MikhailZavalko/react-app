import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

	if(props.users.length === 0) {
		props.setUsers([
			{
				id: 1,
				photoUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQHOMdetORMMgg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=7iQ2zGYbL7HRdttX6r4k3n2NI5ofl8k6uuOfOfC-VGg',
				followed: false,
				fullName: 'Mikhail',
				status: 'I am a BOSS',
				location: { city: 'Khabarovsk', country: 'Russia' }
			},
			{
				id: 2,
				photoUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQHOMdetORMMgg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=7iQ2zGYbL7HRdttX6r4k3n2NI5ofl8k6uuOfOfC-VGg',
				followed: true,
				fullName: 'Dmitry',
				status: 'I am a BOSS too',
				location: { city: 'New York', country: 'USA' }
			},
			{
				id: 3,
				photoUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQHOMdetORMMgg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=7iQ2zGYbL7HRdttX6r4k3n2NI5ofl8k6uuOfOfC-VGg',
				followed: false,
				fullName: 'Nikolay',
				status: 'No no no no no I am a BOSS!',
				location: { city: 'Chernobyl', country: 'Belarus' }
			},
		]);
	}

	return <div>
		{
			props.users.map(u => <div key={u.id}>
				<span>
					<div>
						<img src={u.photoUrl} className={styles.userPhoto} />
					</div>
					<div>
						{u.followed
							? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
							: <button onClick={() => { props.follow(u.id) }}>Follow</button>}

					</div>
				</span>
				<span>
					<span>
						<div>{u.fullName}</div>
						<div>{u.status}</div>
					</span>
					<span>
						<div>{u.location.country}</div>
						<div>{u.location.city}</div>
					</span>
				</span>
			</div>)
		}
	</div>
}

export default Users;