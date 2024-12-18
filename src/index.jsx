import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/App';
import './index.css';
import './vendor/fonts/fonts.scss';
import './vendor/normalize.scss';
import './vendor/globalStyle.scss';
import {Provider} from 'react-redux';
// import { store } from './store/index.js';

import {store} from './store/index';
ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="StudicReact">
    <Provider store={store}>
      <StrictMode>
        <App />
      </StrictMode>
    </Provider>
  </BrowserRouter>
);
