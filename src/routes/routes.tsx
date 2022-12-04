import React from 'react';
import { NotFoundPage } from 'pages/404/404';
import { Marketplace } from 'pages/Marketplace/Marketplace';
import { Profile } from 'pages/Profile/Profile';
import { Outlet, Route, Routes } from 'react-router-dom';
import { useAuth } from 'contexts/auth.context';
import Home from 'pages/Home';
import { Login } from 'pages/Login/Login';
import { ForgotPassword } from 'pages/Login/Pages/ForgotPassword/ForgotPassword';
import { Register } from 'pages/Login/Pages/Register/Register';
import { MyPackages } from 'pages/MyPackages/MyPackages';
import { NewPassword } from 'pages/Login/Pages/NewPassword/NewPassword';
import { ResetPassword } from 'pages/Profile/pages/ResetPassword/ResetPassword';
import { ConfirmEmail } from 'pages/Login/Pages/ConfirmEmail/ConfirmEmail';
import { Album } from 'pages/Album/Album';
import BaseTemplate from 'Components/BaseTemplate';
import { Prizes } from 'pages/Prizes/Prizes';


export const Router = () => {
    const { user } = useAuth();

    if (!user) {
        return (
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="login" element={<BaseTemplate footer={false}><Login /></BaseTemplate>} />
                <Route path="forgot-password" element={<BaseTemplate footer={false}><ForgotPassword /></BaseTemplate>} />
                <Route path="reset-pwd/:code" element={<BaseTemplate footer={false}><NewPassword /></BaseTemplate>} />
                <Route path="validation/:code" element={<BaseTemplate footer={false}><ConfirmEmail /></BaseTemplate>} />
                <Route path="register" element={<BaseTemplate footer={false}><Register /></BaseTemplate>} />
                <Route path="r/:affiliate_code" element={<BaseTemplate footer={false}><Register /></BaseTemplate>} />
                <Route path="/marketplace" element={<BaseTemplate footer={false}><Marketplace /></BaseTemplate>} />
                <Route path="/album" element={<BaseTemplate footer={false}><Album /></BaseTemplate>} />
                <Route path="/rewards" element={<BaseTemplate footer={false}><Prizes /></BaseTemplate>} />
                <Route path="/prizes" element={<BaseTemplate footer={false}><Prizes /></BaseTemplate>} />

                <Route path="*" element={<BaseTemplate footer><NotFoundPage /></BaseTemplate>} />
            </Routes>
        )
    }

    return (
        <Routes>
            {/* <Route> */}
            <Route path='/' element={<Outlet />} >
                <Route index element={<BaseTemplate><Home /></BaseTemplate>} />
                <Route path="/prizes" element={<BaseTemplate footer={false}><Prizes /></BaseTemplate>} />
                <Route path="/rewards" element={<BaseTemplate footer={false}><Prizes /></BaseTemplate>} />
                <Route path="marketplace" element={<BaseTemplate footer={false}><Marketplace /></BaseTemplate>} />
                <Route path="/my-packages" element={<BaseTemplate footer={false}><MyPackages /></BaseTemplate>} />
                <Route path="/album" element={<BaseTemplate footer={false}><Album /></BaseTemplate>} />

                <Route path="register" element={<BaseTemplate><Register /></BaseTemplate>} />
                {/* <Route path="events" element={<></<h2>EventoBaseTemplate><></h2}></>} /> */}
                {/* <Route path='challenges' element={<BaseTemplate><Challenge /></BaseTemplate>} /> */}

                <Route path="profile" element={(
                    <Outlet />
                )}>
                    <Route index element={<BaseTemplate footer={false}><Profile /></BaseTemplate>} />
                    <Route path="reset-password" element={<BaseTemplate footer={false}><ResetPassword /></BaseTemplate>} />
                </Route>
            </Route>


            {/* </Route> */}

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
