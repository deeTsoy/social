import React from 'react';
import store from './components/Redux/State'
import ReactDOM from 'react-dom/client';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

 let reRender =() =>{
  root.render(
    <React.StrictMode>
      <App 
        state={store.getState()} 
        // bind связывает контест this  из стора, а не из компонента из которого ее вызывают
        addPost = {store.addPost.bind(store)} 
        updateNewPostText={store.updateNewPostText.bind(store)} 
        addNewMessageText={store.addNewMessageText.bind(store)}
        addMessage={store.addMessage.bind(store)}
      />
    </React.StrictMode>
  );
};

reRender(store.getState());

store.sub(reRender);