const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState ={
    posts: [
      { id: 1, message: ' how are you', likeCount: 15 },
      { id: 2, message: ' your life is good',likeCount: 10 },
      { id: 3, message: ' Normal good better you',likeCount: 5 },
      { id: 4, message: ' haha its ok',likeCount: 4 },
    ],
    newPostText: "Write new post"
  };

 const profileReducer = (state = initialState, action) => {
    
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
              };
              state.posts.push(newPost);
              state.newPostText = '';
              return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {

  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  }
}
export default profileReducer;

