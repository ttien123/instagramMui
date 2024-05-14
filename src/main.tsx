import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './components/mui.style.css';
import GlobalStyle from './components/globalStyle.ts';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const theme = {};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <GlobalStyle />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
);
