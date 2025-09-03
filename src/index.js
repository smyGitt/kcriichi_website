import React from 'react';
import ReactDOM from 'react-dom/client';
//import { BrowserRouter } from 'react-router-dom'; // NOT COMPATIBLE WITH GITHUB PAGES
import { HashRouter } from 'react-router-dom'; // COMPATIBLE WITH GITHUB PAGES
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// IMPORTANT: SWITCH TO BrowserRouter WHEN NOT USING GITHUB PAGES.
root.render(
  <React.StrictMode>
    <HashRouter> 
      <App />
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
