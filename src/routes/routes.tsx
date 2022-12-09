import BaseTemplate from 'Components/BaseTemplate';
import { Loading } from 'Components/Loading/Loading';
import { useAuth } from 'contexts/auth.context';
import { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';

const Home = lazy(() => import('pages/Home'));
const Login = lazy(() => import('pages/Login/Login').then((module) => ({ default: module.Login })));
const ForgotPassword = lazy(() => import('pages/Login/Pages/ForgotPassword/ForgotPassword').then((module) => ({ default: module.ForgotPassword })));
const NewPassword = lazy(() => import('pages/Login/Pages/NewPassword/NewPassword').then((module) => ({ default: module.NewPassword })));
const ConfirmEmail = lazy(() => import('pages/Login/Pages/ConfirmEmail/ConfirmEmail').then((module) => ({ default: module.ConfirmEmail })));
const Register = lazy(() => import('pages/Login/Pages/Register/Register').then((module) => ({ default: module.Register })));
const Marketplace = lazy(() => import('pages/Marketplace/Marketplace').then((module) => ({ default: module.Marketplace })));
const Album = lazy(() => import('pages/Album/Album').then((module) => ({ default: module.Album })));
const Prizes = lazy(() => import('pages/Prizes/Prizes').then((module) => ({ default: module.Prizes })));
const NotFoundPage = lazy(() => import('pages/404/404').then((module) => ({ default: module.NotFoundPage })));
const MyPackages = lazy(() => import('pages/MyPackages/MyPackages').then((module) => ({ default: module.MyPackages })));
const Profile = lazy(() => import('pages/Profile/Profile').then((module) => ({ default: module.Profile })));
const ResetPassword = lazy(() => import('pages/Profile/pages/ResetPassword/ResetPassword').then((module) => ({ default: module.ResetPassword })));
const Events = lazy(() => import('pages/Events/index').then((module) => ({ default: module.Events })));
const Challenge = lazy(() => import('pages/Challenge/Challenge').then((module) => ({ default: module.Challenge })));

const Privacy = lazy(() => import('pages/Privacy').then((module) => ({ default: module.Privacy })));


export const Router = () => {
    const { user } = useAuth();

    if (!user) {
        return (
            <Suspense fallback={<Loading />}>
                <Routes>
                    <Route path="/" element={<BaseTemplate><Home /></BaseTemplate>} />
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

                    <Route path="/privacy" element={<BaseTemplate><Privacy /></BaseTemplate>} />

                    <Route path="*" element={<BaseTemplate footer={false}><NotFoundPage /></BaseTemplate>} />
                </Routes>
            </Suspense>
        )
    }

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='/' element={<Outlet />} >
                    <Route index element={<BaseTemplate><Home /></BaseTemplate>} />
                    <Route path="/prizes" element={<BaseTemplate footer={false}><Prizes /></BaseTemplate>} />
                    <Route path="/rewards" element={<BaseTemplate footer={false}><Prizes /></BaseTemplate>} />
                    <Route path="marketplace" element={<BaseTemplate footer={false}><Marketplace /></BaseTemplate>} />
                    <Route path="/my-packages" element={<BaseTemplate footer={false}><MyPackages /></BaseTemplate>} />
                    <Route path="/album" element={<BaseTemplate footer={false}><Album /></BaseTemplate>} />

                    <Route path="register" element={<BaseTemplate><Register /></BaseTemplate>} />
                    {/* <Route path="events" element={<BaseTemplate footer={false}><Events /></BaseTemplate>} /> */}
                    {/* <Route path='challenges' element={<BaseTemplate footer={false}><Challenge /></BaseTemplate>} /> */}

                    <Route path="/privacy" element={<BaseTemplate><Privacy /></BaseTemplate>} />

                    <Route path="profile" element={(
                        <Outlet />
                    )}>
                        <Route index element={<BaseTemplate footer={false}><Profile /></BaseTemplate>} />
                        <Route path="reset-password" element={<BaseTemplate footer={false}><ResetPassword /></BaseTemplate>} />
                    </Route>
                </Route>

                <Route path="*" element={<BaseTemplate footer={false}><NotFoundPage /></BaseTemplate>} />
            </Routes>
        </Suspense>
    )
}
