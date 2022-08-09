import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = (props) => {
  let postData = [
    { id: 1, message:"Hi, how are you?", likesCount: 12 },
    { id: 2, message:"It's my first post", likesCount: 11 }
  ]
  let postsElements = postData.map (p => 
  <Post message={p.message} likesCount={p.likesCount} />)
  return (

    <div className={s.postBlock}>
      <h3> My posts</h3>
      <div>
        <div><textarea></textarea></div>
        <div><button>Add Post</button></div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>

  )
}

export default MyPosts;