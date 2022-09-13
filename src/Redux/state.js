// import {rerenderEntireTree } from "../render"; 


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "It's my first post", likesCount: 11 }
            ],
            newPostText: 'it-kamasutra.com'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Natasha' },
                { id: 4, name: 'Sveta' },
                { id: 5, name: 'Marina' },
                { id: 6, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'Hi' },
                { id: 2, message: 'How is your it-kamasutra' },
                { id: 3, message: 'Yo' },
                { id: 4, message: 'Yo' },
                { id: 5, message: 'Yo' },
                { id: 6, message: 'Yo' }
            ]

        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState(){
        return this._state;
    }, 
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    
    addPost() {},
    updateNewPostText(newText) {},
    dispatch(action) {
        if (action.type === ADD_POST){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    }   else if (action.type === UPDATE_NEW_POST_TEXT){

        this._state.profilePage.newPostText = action.newText;
        this._callSubscriber(this._state);
    }

    }
    

}
export const addPostActionCreator = () => {
    
    return {
      type: ADD_POST
    }
  }
  export const updateNewPostNextActionCreator = (text) => {
    return {
      type: UPDATE_NEW_POST_TEXT, newText: text
    }
  }
export default store;
window.store = store;
