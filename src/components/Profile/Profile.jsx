import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

const Profile = () => {
  return (
    <div>
      <div>
        <img src='https://u-stena.ru/upload/iblock/697/69702d59285e3f57fd0e92df595b3d5b.jpg' />
      </div>
      <div>
        ava+description
      </div>
      <MyPosts />
    </div>
  )
}

export default Profile;
