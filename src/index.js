import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { MyContextProvider } from './components/MyContext/MyContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <MyContextProvider>
    <ThemeProvider theme={theme}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </MyContextProvider>
);
