import React from 'react';
import s from './Profile.module.css';


const Profile = () => {
  return (

    <div className={s.content}>
        <div>
          <img src='https://u-stena.ru/upload/iblock/697/69702d59285e3f57fd0e92df595b3d5b.jpg'></img>
        </div>
        <div>
          ava+description
        </div>
        <div>
          My posts
          <div>
            New post
          </div>
          <div className={s.posts}>
            <div className={s.item}>Post1</div>
            <div className={s.item}>Post2</div>
          </div>
        </div>
        </div>
  )
}

export default Profile;
