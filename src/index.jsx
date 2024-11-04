import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/App.jsx';
import './index.css';
import './vendor/fonts/fonts.scss';
import './vendor/normalize.scss';
import './vendor/globalStyle.scss';
import {Provider} from 'react-redux';
// import { store } from './store/index.js';
console.log(123);

import {store} from './store/index.js';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
