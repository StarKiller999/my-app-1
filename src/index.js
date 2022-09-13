import reportWebVitals from './reportWebVitals';
import {rerenderEntireTree} from './render';
import store from './Redux/state';



rerenderEntireTree(store.getState);
reportWebVitals();
store.subscribe (rerenderEntireTree);
