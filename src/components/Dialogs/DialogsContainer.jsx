import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogs-reducer';
import StoreContext from '../../StoreContext';
import DialogItem from './DialogItem/DialogsItem';
import Dialogs from './Dialogs';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import {connect} from 'react-redux';

const DialogsContainer = () => {
    

    return <StoreContex.Consumer>{
        (store)=>{
            let state = store.getState().dialogsPage;
        
    let onSendMessageClick =() =>{
        store.dispatch(sendMessageCreator());

    }
    let onNewMessageClick =(body)=>{
        store.dispatch(updateNewMessageBodyCreator(body));
    }
         return <Dialogs updateNewMessageBodyCreator={onNewMessageClick}
          sendMessage={onSendMessageClick} 
          dialogsPage={store.getState().dialogsPage}/>
    }
    }
    </StoreContex.Consumer>
   
}

const SuperDialogsContainer = connect()(Dialogs)
export default DialogsContainer;