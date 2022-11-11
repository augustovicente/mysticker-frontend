import Header from 'Components/Header/Header';
import SideBar from 'Components/IndexOne/SideBar';
import { useAuth } from 'contexts/auth.context';
import { IndexAuth } from 'pages/Auth';
import { Hall } from 'pages/Auth/Hall/Hall';
import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Outlet, Route, Routes } from 'react-router-dom';


export const AuthRoutes = () =>
    (
        <Routes>
            <Route path="/" element={<IndexAuth />}>
                <Route index element={<Hall />} />
                <Route path="test" element={<h1>TESTE</h1>} />
            </Route>

            <Route path="*" element={<h1>Page not Found - 404</h1>} />

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
