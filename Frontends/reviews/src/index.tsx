import React, { StrictMode } from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { parseHtmlToReact } from '@atlas/ui-library';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

import './index.css';

const TAG_NAME = 'reviews-app';

class AppElement extends HTMLElement {
  private observer: MutationObserver;

  constructor() {
    super();

    this.observer = new MutationObserver(() => this.update());
    this.observer.observe(this, { attributes: true });
  }

  connectedCallback() {
    this.mount();
  }

  disconnectedCallback() {
    this.unmount();
    this.observer.disconnect();
  }

  update() {
    this.unmount();
    this.mount();
  }

  private mount() {
    const props = {
      children: parseHtmlToReact(this.innerHTML)
    };

    render(
      <StrictMode>
        <App {...props} />
      </StrictMode>,
      document.getElementsByTagName(TAG_NAME)[0]
    );
  }

  private unmount() {
    unmountComponentAtNode(this);
  }
}

if (!window.customElements.get(TAG_NAME)) {
  window.customElements.define(TAG_NAME, AppElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
