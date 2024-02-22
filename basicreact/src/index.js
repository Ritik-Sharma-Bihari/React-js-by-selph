import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
// here const root store the refrence of ReactDom object....
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
