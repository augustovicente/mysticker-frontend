import Header from 'Components/BaseTemplate/components/Header/Header';
import IndexOne from 'Components/IndexOne/IndexOne';
import { useAuth } from 'contexts/auth.context';
import { NotFoundPage } from 'pages/404/404';
import { IndexAuth } from 'pages/Auth';
import { Hall } from 'pages/Auth/Hall/Hall';
import { ResetPassword } from 'pages/Profile/pages/ResetPassword/ResetPassword';
import { Profile } from 'pages/Profile/Profile';
import React from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';


export const AuthRoutes = () =>
(
    <Routes>
        <Route path="/" element={<IndexAuth />}>
            <Route index element={<Hall />} />

            <Route path="profile" element={<Outlet />}>
                <Route index element={<Profile />} />
                <Route path="reset-password" element={<ResetPassword />} />
            </Route>
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
