import React from 'react';
import store from './components/Redux/reduxStore'
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);


