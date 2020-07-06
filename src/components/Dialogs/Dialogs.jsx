import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = ( props ) => {

	let messageElements = props.state.messages.map( m => <Message message={ m.message } /> );
	let dialogElements = props.state.dialogs.map( d => <DialogItem name={ d.name } id={ d.id } /> );
	let newMessageElement = React.createRef();
	let addMessage = () => {
		let text = newMessageElement.current.value;
		alert(text);
	}

	return (
		<div className={ s.dialogs }>
			<div className={ s.dialogsItems }>
				{ dialogElements }
			</div>
			<div className={ s.messages }>
				{ messageElements }
			</div>
			<div>
				<div>
					<textarea ref={newMessageElement}></textarea>
				</div>
				<div>
					<button onClick={addMessage}>Add Message</button>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;