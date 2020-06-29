let state = {
	profilePage: {
		posts: [
			{ id: 1, message: "Hi xyu, how are you?", likesCount: 15 },
			{ id: 2, message: "it's my first post", likesCount: 20 },
			{ id: 3, message: "BlaBla", likesCount: 12 },
			{ id: 4, message: "Dada", likesCount: 10 }
		]
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
}

export default state;