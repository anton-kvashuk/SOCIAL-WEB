const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';
let initialState = {
    dialogs: [
        { id: 2, name: ' Slava',  },
        { id: 3, name: ' Dimych'  },
        { id: 1, name: ' Andrey'  },
        { id: 4, name: ' Valera'  },
        { id: 5, name: ' Sveta',  },
        { id: 6, name: ' Sasha',  },
        { id: 7, name: ' Olga',  },
        { id: 8, name: ' Viktor',  },
        { id: 9, name: ' Oleg',  }
      ],
      messages: [
      {id: 1, message: ' hi'},
      {id: 2, message: ' How is your life'},
      {id: 3, message: ' Normal adn you'},
      {id: 4, message: ' haha'},
    ],
    newMessageBody: "",
  };

const dialogsReducer = (state =initialState, action) => {
    switch (action.type){
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = action.body='';
            state.messages.push({ id: 5, message: body });
            return state;
        default: 
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
  return {type: UPDATE_NEW_MESSAGE_BODY, body: body }
} 

export default dialogsReducer;