import Home from 'pages/Home';
import { Login } from 'pages/Login/Login';
import { ForgotPassword } from 'pages/Login/Pages/ForgotPassword/ForgotPassword';
import React from 'react';
import { Route, Routes } from 'react-router-dom';

export const MainRoutes = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
    </Routes>
)
