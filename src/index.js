import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import NoizeBg from './components/NoizeBg/NoizeBg';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <NoizeBg />
  </React.StrictMode>
);
reportWebVitals();
