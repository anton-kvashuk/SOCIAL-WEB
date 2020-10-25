import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import DialogItem from './DialogItem/DialogsItem';
import s from './Dialogs.module.css';
import Message from './Message/Message';

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id} />);
    let messagesElements = state.messages.map((m) => <Message message={m.message} />);
    let newMessageBody = state.newMessageBody;
    
    let onSendMessageClick =() =>{
        props.sendMessage();

    }
    let onNewMessageClick =(e)=>{
        let body = e.target.value;
        props.updateNewMessageBodyCreator(body);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div><textarea value={newMessageBody}
                               placeholder="Enter your message!"
                               onChange={onNewMessageClick}
                               name="new_message_dialog" 
                id="" cols="50" rows="5"></textarea></div>
                <div><button onClick={onSendMessageClick}>Send Message</button></div>
            </div>
            
        </div>
    )
}

export default Dialogs;