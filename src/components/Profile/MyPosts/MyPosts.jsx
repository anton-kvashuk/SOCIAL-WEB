import React from 'react';
import Post from './Post/Post';
import s from "./MyPosts.module.css";



const MyPosts = (props) => {

  let postElements =
      props.posts.map( p => <Post message={p.message} like={p.likeCount} />)
  
  let newPostElement = React.createRef();
  
  let onAddPost = () => {
    props.addPost();
  
  }
  
  let onPostChange = ()=>{
    let text= newPostElement.current.value;
    props.updateNewPostText(text);
    
  }

  return <div className={s.postBlock}> 
    <h3>My Post</h3>
    <div className={s.postTop}>
      <div>
        <textarea onChange={ onPostChange } 
        ref={newPostElement} value={props.newPostText}/>
        </div>
      <div><button onClick={onAddPost}>Add post</button></div>
    </div>
    <div className={s.posts}>
     {postElements}
      
    </div>
  </div>
   
}
export default MyPosts;