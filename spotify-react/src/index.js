import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AudioContextProvider } from './context/audioContext';
import { ThemeContextProvider } from './context/themeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AudioContextProvider>
    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>
  </AudioContextProvider>
);