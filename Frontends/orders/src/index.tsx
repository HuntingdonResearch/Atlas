import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const TAG_NAME = 'orders-app';

const root = createRoot(
  document.getElementsByTagName(TAG_NAME)[0] as HTMLElement
);

class AppElement extends HTMLElement {
  connectedCallback() {
    root.render(
      <StrictMode>
        <App/>
      </StrictMode>
    )
  }
}

if (!window.customElements.get(TAG_NAME)) {
  window.customElements.define(TAG_NAME, AppElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
