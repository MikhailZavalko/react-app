import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../../api/utils/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {

	let postsElements = 
			props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} /> );

	let onAddPost = (values) => {
		props.addPost(values.newPostText);
	}

	return ( 
		<div className={ s.postsBlock }>
			<h3>My Posts</h3>
			<AddNewPostFormRedux onSubmit={onAddPost} />
			<div className={s.posts}>
				{postsElements}
			</div>
		</div>
	)
}

const AddNewPostForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<div>
				<Field component={Textarea} placeholder={"Post message"} name="newPostText" validate={[required, maxLength10]} />
			</div>
			<div>
				<button>Add post</button>
			</div>
		</form>
	)
}

const AddNewPostFormRedux = reduxForm({ form: "ProfileAddNewPostForm" })(AddNewPostForm)

export default MyPosts;