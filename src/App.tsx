import Home from "pages/Home";
import React, { useEffect } from "react"
import { ThemeProvider } from 'styled-components'
import $ from "jquery"

import { Routes, Route, RouterProvider } from 'react-router-dom'
import { theme } from "styles/themes/theme";
import GlobalTheme from "styles/themes/global";
import { Hall } from "pages/Auth/Hall/Hall";
import Header from "Components/Header/Header";
import { RouterAuth } from "routes/auth.routes";
import { Router } from "routes/routes";
// import Activity from './pages/Activity'
// import AuthorProfile from './pages/AuthorProfile'
// import Blog from './pages/Blog'
// import BlogDetails from './pages/BlogDetails'
// import Category from './pages/Category'
// import Collections from './pages/Collections'
// import CreateItem from './pages/CreateItem'
// import Creators from './pages/Creators'
// import Explore from './pages/Explore'
// import LoginRegister from './pages/LoginRegister'
// import MarketSingle from './pages/MarketSingle'
// import NftLiveBidding from './pages/NftLiveBidding'
// import Ranking from './pages/Ranking'


type User = {
    token: string
}

function App() {
    useEffect(() => {
        $(".menu-trigger").on("click", function () {
            $(".offcanvas-wrapper, .offcanvas-overly").addClass("active");
            return false;
        });
        $(".menu-close,.offcanvas-overly").on("click", function () {
            $(".offcanvas-wrapper, .offcanvas-overly").removeClass("active");
        });
    }, []);

    const user: User = {
        token: "123"
    }

    return (
        <ThemeProvider theme={theme}>
            <GlobalTheme />

            <RouterProvider router={user?.token ? RouterAuth : Router} />
        </ThemeProvider>
    );
}

export default App;
