import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: ' how are you', likeCount: 15 },
        { id: 2, message: ' your life is good',likeCount: 10 },
        { id: 3, message: ' Normal good better you',likeCount: 5 },
        { id: 4, message: ' haha its ok',likeCount: 4 },
      ],
      newPostText: "Write new post"
    },
    dialogsPage: {
      messages: [
        {id: 1, message: ' hi'},
        {id: 2, message: ' How is your life'},
        {id: 3, message: ' Normal adn you'},
        {id: 4, message: ' haha'},
      ],
      dialogsData: [
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
      newMessageBody: ""
    },
    sidebar: {}
  },
  _callSubscriber() {
    console.log('state changed')
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer; //observer - наблюдатель (похож на паблишерсибскрайбер)
  },
  dispatch(action) { // {type: 'ADD-POST'}

    this._state.profilePage  =profileReducer(this._state.profilePage, action);
    this._state.dialogsPage  =dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar  =sidebarReducer(this._state.sidebar, action);
  
    this._callSubscriber(this.state);
    
  }
}

export default store;
window.state = store;