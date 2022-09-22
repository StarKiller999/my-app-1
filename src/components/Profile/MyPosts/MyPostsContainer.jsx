import React from 'react';
import { addPostActionCreator, updateNewPostNextActionCreator } from '../../../Redux/profile-reducer';
import StoreContext from '../../../StoreContext';
import MyPosts from './MyPosts';

const MyPostsContainer = () => {

  return (
    <StoreContext.Consumer> 
      { (store) => {
        let state = store.getState();
        let addPost = () => {
        store.dispatch(addPostActionCreator());
        }
        let onPostChange = (text) => {
        let action = updateNewPostNextActionCreator(text);
      store.dispatch(action);
        }

      return <MyPosts updateNewPostText={onPostChange}
        addPost={addPost}
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText} />
      }}
    </StoreContext.Consumer>)
}

export default MyPostsContainer;