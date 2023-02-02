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
        /* Метод bind() создаёт новую функцию, 
        которая при вызове устанавливает в качестве 
        контекста выполнения this предоставленное значение.*/
        dispatch = {store.dispatch.bind(store)} 
      />
    </React.StrictMode>
  );
};

reRender(store.getState());

store.sub(reRender);