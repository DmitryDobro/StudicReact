import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './components/App/App.jsx';
import './index.css';
import './vendor/fonts/fonts.scss';
import './vendor/normalize.scss';
import './vendor/globalStyle.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
