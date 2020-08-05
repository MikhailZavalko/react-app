import React from 'react';
import { UpdateNewPostTextActionCreator, addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
	let state = props.store.getState();

	let addPost = () => {
		props.store.dispatch(addPostActionCreator());
	}

	let onPostChange = (text) => {
		let action = UpdateNewPostTextActionCreator(text);
		props.store.dispatch(action);
	}

	return (<MyPosts 	updateNewPostText={onPostChange} 
										onAddPost={addPost} 
										posts={state.profilePage.posts} />)
}

export default MyPostsContainer;