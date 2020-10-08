const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
	posts: [
		{ id: 1, message: "Hi xyu, how are you?", likesCount: 15 },
		{ id: 2, message: "it's my first post", likesCount: 20 },
		{ id: 3, message: "BlaBla", likesCount: 12 },
		{ id: 4, message: "Dada", likesCount: 10 }
	],
	newPostText: 'Mikhail Zavalko',
	profile: null
}

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST: {
			let newPost = {
				id: 5,
				message: state.newPostText,
				likesCount: 0
			};
			return {
				...state,
				posts: [...state.posts, newPost],
				newPostText: '',
			};
		}
		case UPDATE_NEW_POST_TEXT: {
			return {
				...state,
				newPostText: action.newText
			};
		}
		case SET_USER_PROFILE: {
			return { ...state, profile: action.profile}
		}
		default:
			return state;
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: setUserProfile, profile })
export const UpdateNewPostTextActionCreator = (text) =>
	({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default profileReducer;