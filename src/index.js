import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <Provider> is use to provide communication between react and redux
  // you have to make sure that you pass the store in Provider
  // jya pan redux use karvanu hoy athava khas karine root component(App component ) ne <Provider> ma wrap kar devo
  <Provider store={store}>
    <App/>
  </Provider>
);

