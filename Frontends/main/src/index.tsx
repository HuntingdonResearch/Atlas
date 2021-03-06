import React, { StrictMode } from 'react';
import { render } from 'react-dom';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import 'bulma/css/bulma.css';
import 'bulma-social/css/all.css';
import './index.css';

render(
  <StrictMode>
    <App/>
  </StrictMode>,
  document.getElementById('root') as HTMLElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
