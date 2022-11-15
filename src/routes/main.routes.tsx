import { NotFoundPage } from 'pages/404/404';
import Home from 'pages/Home';
import { Login } from 'pages/Login/Login';
import { ForgotPassword } from 'pages/Login/Pages/ForgotPassword/ForgotPassword';
import { Register } from 'pages/Login/Pages/Register/Register';
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';

export const MainRoutes = () => {
    const location = useLocation();

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="register" element={<Register />} />

            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
