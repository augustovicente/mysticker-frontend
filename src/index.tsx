import Header from 'Components/BaseTemplate/components/Header/Header';
import React, { StrictMode } from 'react';
import { createRoot } from "react-dom/client";
import { BrowserRouter, createBrowserRouter, Link, RouterProvider } from 'react-router-dom';
import App from './App';
import 'react-loading-skeleton/dist/skeleton.css';
import 'react-toastify/dist/ReactToastify.css';

const container = document.getElementById('root');
const root = createRoot(container!);


root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
