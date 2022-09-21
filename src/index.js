import reportWebVitals from './reportWebVitals';
import { rerenderEntireTree } from './render';
import store from './Redux/redux-store';



rerenderEntireTree(store.getState);
reportWebVitals();
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});