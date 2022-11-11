import React, { useEffect } from "react"
import { ThemeProvider } from 'styled-components'
import $ from "jquery"

import { theme } from "styles/themes/theme";
import GlobalTheme from "styles/themes/global";
import { AuthRoutes } from "routes/auth.routes";
import { AuthProvider, useAuth } from "contexts/auth.context";
import { MainRoutes } from "routes/main.routes";
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

    const { user } = useAuth();

    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <GlobalTheme />
                {user ? <AuthRoutes /> : <MainRoutes />}
            </AuthProvider >
        </ThemeProvider>
    );
}

export default App;
