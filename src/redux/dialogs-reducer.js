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
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE:
			let body = action.newMessageBody;
			return {
				...state,
				messages: [...state.messages, {id: 6, message: body}]
			};
	
		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer;