import React from 'react';
import { NotFoundPage } from 'pages/404/404';
import { IndexAuth } from 'pages/Auth';
import { Hall } from 'pages/Auth/Hall/Hall';
import { Marketplace } from 'pages/Marketplace/Marketplace';
import { ResetPassword } from 'pages/Profile/pages/ResetPassword/ResetPassword';
import { Profile } from 'pages/Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useAuth } from 'contexts/auth.context';
import Home from 'pages/Home';
import { Login } from 'pages/Login/Login';
import { ForgotPassword } from 'pages/Login/Pages/ForgotPassword/ForgotPassword';
import { Register } from 'pages/Login/Pages/Register/Register';


export const Router = () => {
    const { user } = useAuth();

    if (!user) {
        return (
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="forgot-password" element={<ForgotPassword />} />
                <Route path="register" element={<Register />} />
                <Route path="/marketplace" element={<Marketplace />} />

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<IndexAuth />}>
                <Route index element={<Hall />} />

                <Route path="profile" element={<Outlet />}>
                    <Route index element={<Profile />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Route>

                <Route path="marketplace" element={<Marketplace />} />
            </Route>

            <Route path="*" element={<NotFoundPage />} />


            {/* <Route path="/nft-marketplace" element={<Explore />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/blog" element={<Blog />} />

            <Route path="/blog-details" element={<BlogDetails />} />
            <Route path="/activity" element={<Activity />} />
            <Route path="/ranking" element={<Ranking />} />
            <Route path="/login-register" element={<LoginRegister />} />
            <Route path="/author-profile" element={<AuthorProfile />} />
            <Route path="/create-item" element={<CreateItem />} />
            <Route path="/category" element={<Category />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/market-single" element={<MarketSingle />} />
            <Route path="/nft-live-bidding" element={<NftLiveBidding />} /> */}
        </Routes>
    )
}
