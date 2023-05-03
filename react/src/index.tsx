import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StateProvider from './context/context';

import './assets/styles/index.css';
import './assets/styles/index.scss';


const root = ReactDOM.createRoot(
  document.getElementById('nubdev-root') as HTMLElement
);

root.render(
  <StateProvider>
    <App />
  </StateProvider>
);