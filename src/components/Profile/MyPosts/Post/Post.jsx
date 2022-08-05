import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
  return (
          <div className={s.item}>
            <img src='https://images.esellerpro.com/2466/I/304/4/navimask2.jpg'></img>
            {props.message}
            <div><span>like</span>
            {props.likesCount}
            </div>
            </div>
         
  )
}

export default Post;