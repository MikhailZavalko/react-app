const { default: profileReducer, addPostActionCreator } = require("./profile-reducer");

it('length of posts should be incremented', () => {
	let action = addPostActionCreator("it-kaamsutra.com");
	let state = {
		posts: [
			{ id: 1, message: "Hi xyu, how are you?", likesCount: 15 },
			{ id: 2, message: "it's my first post", likesCount: 20 },
			{ id: 3, message: "BlaBla", likesCount: 12 },
			{ id: 4, message: "Dada", likesCount: 10 }
		]
	}

	let newState = profileReducer(state, action);

	expect(newState.posts.length).toBe(5);
	expect(newState.posts[4].message).toBe("it-kaamsutra.com");
});