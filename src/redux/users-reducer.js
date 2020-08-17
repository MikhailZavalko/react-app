const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
	users: [
		{ id: 1, photoUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQHOMdetORMMgg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=7iQ2zGYbL7HRdttX6r4k3n2NI5ofl8k6uuOfOfC-VGg', followed: false, fullName: 'Mikhail', status: 'I am a BOSS', location: {city: 'Khabarovsk', country: 'Russia'} },
		{ id: 2, photoUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQHOMdetORMMgg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=7iQ2zGYbL7HRdttX6r4k3n2NI5ofl8k6uuOfOfC-VGg', followed: true, fullName: 'Dmitry', status: 'I am a BOSS too', location: {city: 'New York', country: 'USA'} },
		{ id: 3, photoUrl: 'https://media-exp1.licdn.com/dms/image/C5103AQHOMdetORMMgg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=7iQ2zGYbL7HRdttX6r4k3n2NI5ofl8k6uuOfOfC-VGg', followed: false, fullName: 'Nikolay', status: 'No no no no no I am a BOSS!', location: {city: 'Chernobyl', country: 'Belarus'} },
	]
}

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case FOLLOW:
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userId) {
						return {...u, followed: true}
					}
					return u;
				})
			}

		case UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userId) {
						return { ...u, followed: false }
					}
					return u;
				})
			}

		case SET_USERS: {
			return { ...state, users: [ ...state.users, ...action.users ]}
		}

		default:
			return state;
	}
}

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) =>	({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;