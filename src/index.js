import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, updateNewPostText, subscribe} from './redux/state';
import {BrowserRouter} from "react-router-dom";
import state from './redux/state';

let rerenderEntireTree = () => {
	ReactDOM.render(
		<React.StrictMode>
			<App state={state} addPost={addPost} updateNewPostText={updateNewPostText} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}

rerenderEntireTree(state);

subscribe(rerenderEntireTree);