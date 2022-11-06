import Home from 'Components/IndexOne/Home';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

export const Router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Home />} />
        </>
    )
);
