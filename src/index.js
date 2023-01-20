import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/App'
import state from './components/Redux/State';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App state={state}/>
  </React.StrictMode>
);

