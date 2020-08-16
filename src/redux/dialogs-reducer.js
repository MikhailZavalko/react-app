const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
	],
	newMessageBody: "",
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_NEW_MESSAGE_BODY:
			return {
				...state,
				newMessageBody: action.body
			};
		case SEND_MESSAGE:
			let body = state.newMessageBody;
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, {id: 6, message: body}]
			};
	
		default:
			return state;
	}
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })
export const UpdateNewMessageBodyCreator = (body) =>
	({ type: UPDATE_NEW_MESSAGE_BODY, body: body });

export default dialogsReducer;