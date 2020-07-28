const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let store = {
	_state: {
		profilePage: {
			posts: [
				{ id: 1, message: "Hi xyu, how are you?", likesCount: 15 },
				{ id: 2, message: "it's my first post", likesCount: 20 },
				{ id: 3, message: "BlaBla", likesCount: 12 },
				{ id: 4, message: "Dada", likesCount: 10 }
			],
			newPostText: 'Mikhail Zavalko'
		},
		dialogsPage: {
			dialogs: [
				{ id: 1, name: 'Mikhail' },
				{ id: 2, name: 'Oleg' },
				{ id: 3, name: 'Naska' },
				{ id: 4, name: 'Ivan' },
				{ id: 5, name: 'Marina' },
				{ id: 6, name: 'Kostyan' }
			],
			messages: [
				{ id: 1, message: 'Hi' },
				{ id: 2, message: 'How are you?' },
				{ id: 3, message: 'YO' }
			]
		},
		sidebar: {
			friends: [
				{ id: 1, name: 'Mikhail' },
				{ id: 2, name: 'Oleg' },
				{ id: 3, name: 'Naska' }
			]
		}
	},
	_callSubscriber() {
		console.log("State changed");
	},

	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		if (action.type === ADD_POST) {
			let newPost = {
				id: 5,
				message: this._state.profilePage.newPostText,
				likesCount: 0
			};
			this._state.profilePage.posts.push(newPost);
			this._state.profilePage.newPostText = "";
			this._callSubscriber(this._state);
		} else if (action.type === UPDATE_NEW_POST_TEXT) {
			this._state.profilePage.newPostText = action.newText;
			this._callSubscriber(this._state);
		}
	}
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const UpdateNewPostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });

export default store;
window.store = store;