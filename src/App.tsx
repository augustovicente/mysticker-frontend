import { useEffect, useTransition } from "react"
import { ThemeProvider } from 'styled-components'
import $ from "jquery"
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

import { theme } from "styles/themes/theme";
import GlobalTheme from "styles/themes/global";
import { AuthProvider } from "contexts/auth.context";
import { ToastContainer } from 'react-toastify';
import { Router } from "routes/routes";

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


    return (
        <ThemeProvider theme={theme}>
            <I18nextProvider i18n={i18n}>
                <AuthProvider>
                    <GlobalTheme />
                        <Router />
                    <ToastContainer theme="colored" newestOnTop autoClose={3000}  />
                </AuthProvider >
            </I18nextProvider>
        </ThemeProvider>
    );
}

export default App;
