import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AudioContextProvider } from './context/audioContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AudioContextProvider>
      <App />
  </AudioContextProvider>
);