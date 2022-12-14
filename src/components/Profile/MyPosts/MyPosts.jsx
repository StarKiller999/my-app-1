import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';
import {addPostActionCreator, updateNewPostNextActionCreator} from '../../../Redux/profile-reducer'


const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} />)
  let newPostElement = React.createRef();
  let addPost = () => {
    props.dispatch (addPostActionCreator());
  }

  let onPostChange = () => {

    let text = newPostElement.current.value;
    props.dispatch(updateNewPostNextActionCreator(text) );
  }

  return (

    <div className={s.postBlock}>
      <h3> My posts</h3>
      <div>
        <div><textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText} /></div>
        <div><button onClick={addPost}>Add Post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  )
}

export default MyPosts;