import React, { useContext, useEffect, useState } from 'react'
import $ from 'jquery';

import "./Header.css";
import { LoginButton } from './components/LoginButton';
import { DefaultButton } from './components/DefaultButton';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/auth.context';
import { Radio, Space } from 'antd';
import i18n from 'i18n';
import * as S from './styles';
import { MobileNav } from './components/MobileNav/MobileNav';
import { ReactComponent as DiscordIcon } from 'assets/imgs/discord.svg';
import { ReactComponent as TwitterIcon } from 'assets/imgs/twitter.svg';
import { ReactComponent as OpenseaIcon } from 'assets/imgs/opensea.svg';
import { ReactComponent as InstagramIcon } from 'assets/imgs/instagram.svg';
import { ReactComponent as LinkIcon } from 'assets/imgs/link.svg';
import { connect_wallet } from 'models/User';
import { useToggle } from 'hooks/useToggle';
import { toast } from 'react-toastify';
import { t } from 'i18next';

const Header = (props) => {
    const { user, signOut } = useAuth();
    const { hasContainer = true } = props;
    const location = useLocation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [selectedMenu, setSelectedMenu] = useState(null);
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useToggle();
    const [wallet, setWallet] = useState(localStorage.getItem('wallet') || '');

    const handleChangeLanguage = (e) => {
        setSelectedLanguage(e.target.value);
        i18n.changeLanguage(e.target.value)
    };

    const handleLogin = () => {
        $('body').removeClass('mobile-menu-visible');
        navigate('/login');
    }

    const handleConnectWallet = async () => {
        setIsLoading(true);
        await connect_wallet()
            .then(res => {
                setWallet(res);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const handleCopyWallet = () => {
        navigator.clipboard.writeText(wallet);
        toast.success('Carteira copiada com sucesso!', { toastId: 'copyWallet' });
    }

    const handleDisconnectWallet = () => {
        setWallet('');
        localStorage.removeItem('wallet');
        toast.success('Carteira desconectada com sucesso!', { toastId: 'disconnectWallet' });
    }

    const menuItems = [
        {
            id: 'language',
            icon: '/assets/img/icons/browser-icon.svg',
            title: t('header.language'),
            selectedMenu: selectedMenu,
            setSelectedMenu: setSelectedMenu,
            children: (
                <Radio.Group
                    style={{ display: 'flex', flexDirection: 'column', padding: 0, gap: '18px' }}
                    onChange={handleChangeLanguage}
                    value={selectedLanguage}
                >
                    <Radio value='pt-BR'>PT - BR</Radio>
                    <Radio value='en-US'>EN - US</Radio>
                </Radio.Group>
            )
        },
        {
            id: 'whitepaper',
            icon: '/assets/img/icons/open-link-icon.svg',
            title: t('header.whitepaper'),
            selectedMenu,
            onClick: () => {
                $('body').removeClass('mobile-menu-visible');
                window.open('https://mysticker.gitbook.io/whitepaper-mysticker/', '_blank')
            }
        },
        {
            id: 'wallet',
            icon: '/assets/img/icons/wallet-icon.svg',
            title: t('header.wallet'),
            selectedMenu: selectedMenu,
            setSelectedMenu: setSelectedMenu,
            needsAuth: true,
            children: (
                <>
                    <S.Wallets>
                        {wallet ? (
                            <>
                                <button title={wallet} onClick={handleCopyWallet} className="wallet">
                                    <span className='wallet-address'>
                                        {wallet.slice(0, 6) + '...' + wallet.slice(-4)}
                                    </span>
                                </button>

                                <button onClick={handleDisconnectWallet} className='disconnect'>
                                    {t('header.disconnect_wallet')}
                                </button>
                            </>

                        ) : (
                            <>
                                <button onClick={handleConnectWallet} className="wallet">
                                    {isLoading ? (
                                        <div className="spinner-border spinner-border-md" role="status">
                                        </div>
                                    ) : (
                                        <>
                                            {t('header.connect_wallet')}
                                            <LinkIcon height={26} width={26} />
                                        </>
                                    )}
                                </button>

                                <span className='description'>
                                    {t('header.connect_wallet_description')}
                                </span>

                                <button onClick={() => {
                                    window.open('https://metamask.io/', '_blank')
                                }} className='create-wallet'>
                                    {t('header.create_wallet')}
                                </button>
                            </>
                        )}

                    </S.Wallets>
                </>
            )
        },
        {
            id: 'rewards',
            icon: '/assets/img/icons/gift-icon.svg',
            title: t('header.rewards'),
            // selectedMenu,
            // setSelectedMenu,
            needsAuth: true,
        },
        {
            id: 'notifications',
            icon: '/assets/img/icons/notification-icon.svg',
            title: t('header.notification'),
            // selectedMenu,
            // setSelectedMenu,
            needsAuth: true,
        },
        {
            id: 'logout',
            icon: '/assets/img/icons/sign-out.svg',
            title: t('header.logout'),
            selectedMenu,
            setSelectedMenu,
            needsAuth: true,
            onClick: () => {
                $('body').removeClass('mobile-menu-visible');
                signOut();
            }
        },
    ];

    useEffect(() => {
        //Mobile Nav Hide Show
        if ($('.mobile-menu').length) {

            var mobileMenuContent = $('.menu-area .push-menu').html();
            $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

            $('.menu-backdrop, .mobile-menu .close-btn').click(() => {
                $('body').removeClass('mobile-menu-visible');
            })

            //Menu Toggle Btn
            $('.mobile-nav-toggler').on('click', function () {
                $('body').addClass('mobile-menu-visible');
            });
        }
    }, []);

    useEffect(() => {
        const handleScroll = window.addEventListener('scroll', () => {
            if (window.scrollY < 150) {
                $("#sticky-header").removeClass("sticky-menu");
                $('.scroll-to-target').removeClass('open');
                $("#header-top-fixed").removeClass("header-fixed-position");
            } else {
                $("#sticky-header").addClass("sticky-menu");

                $('.scroll-to-target').addClass('open');
                $("#header-top-fixed").addClass("header-fixed-position");
            }
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        $(".menu-tigger").on("click", function () {
            $(".extra-info,.offcanvas-overly").addClass("active");
            return false;
        });

        $(".menu-close,.offcanvas-overly").on("click", function () {
            $(".extra-info,.offcanvas-overly").removeClass("active");
        });
    }, []);

    return (
        <header className='main-header'>
            <div id='sticky-header' className="menu-area">
                <div className='container-fluid'>
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                            <div className="menu-wrap main-menu">
                                <nav className="menu-nav py-lg-3 py-md-2">
                                    <div className="logo d-block">
                                        <Link to="/">
                                            <img
                                                src="/assets/img/logo/logo-header.svg"
                                                alt="Logo My Sticker"
                                            />
                                        </Link>
                                    </div>
                                    <div className="navbar-wrap push-menu main-menu d-none d-lg-flex">
                                    </div>
                                    <div className="header-action d-none d-lg-block">
                                        <ul>
                                            {
                                                user && (
                                                    <>
                                                        <li>
                                                            <DefaultButton
                                                                title={t('header.rewards')}
                                                                icon="/assets/img/icons/gift-icon.svg"
                                                                disabled
                                                                onlyLink='/'
                                                            >
                                                            </DefaultButton>
                                                        </li>
                                                        <li>
                                                            <DefaultButton
                                                                disabled
                                                                onlyLink='/'
                                                                title={t('header.notification')}
                                                                icon="/assets/img/icons/notification-icon.svg"
                                                            />
                                                        </li>
                                                        <li>
                                                            <DefaultButton
                                                                title={t('header.wallet')}
                                                                icon="/assets/img/icons/wallet-icon.svg"
                                                            >
                                                                <S.Wallets>
                                                                    {wallet ? (
                                                                        <>
                                                                            <button title={wallet} onClick={handleCopyWallet} className="wallet">
                                                                                <span className='wallet-address'>
                                                                                    {wallet.slice(0, 6) + '...' + wallet.slice(-4)}
                                                                                </span>
                                                                            </button>

                                                                            <button onClick={handleDisconnectWallet} className='disconnect'>
                                                                                {t('header.disconnect_wallet')}
                                                                            </button>
                                                                        </>

                                                                    ) : (
                                                                        <>
                                                                            <button onClick={handleConnectWallet} className="wallet">
                                                                                {isLoading ? (
                                                                                    <div className="spinner-border spinner-border-md" role="status">
                                                                                    </div>
                                                                                ) : (
                                                                                    <>
                                                                                        {t('header.connect_wallet')}
                                                                                        <LinkIcon height={26} width={26} />
                                                                                    </>
                                                                                )}
                                                                            </button>

                                                                            <span className='description'>
                                                                                {t('header.connect_wallet_description')}
                                                                            </span>

                                                                            <button onClick={() => {
                                                                                window.open('https://metamask.io/', '_blank')
                                                                            }} className='create-wallet'>
                                                                                {t('header.create_wallet')}
                                                                            </button>
                                                                        </>
                                                                    )}
                                                                </S.Wallets>
                                                            </DefaultButton>
                                                        </li>
                                                    </>
                                                )
                                            }
                                            <li>
                                                <DefaultButton
                                                    onlyLink='https://mysticker.gitbook.io/whitepaper-mysticker/'
                                                    title={t('header.whitepaper')}
                                                    icon="/assets/img/icons/open-link-icon.svg"
                                                />
                                            </li>
                                            <li>
                                                <DefaultButton title={t('header.language')} icon="/assets/img/icons/browser-icon.svg">
                                                    <Radio.Group onChange={handleChangeLanguage} value={selectedLanguage}>
                                                        <Space className='container-languages' direction="vertical">
                                                            <Radio value='pt-BR'>PT - BR</Radio>
                                                            <Radio value='en-US'>EN - US</Radio>
                                                        </Space>
                                                    </Radio.Group>
                                                </DefaultButton>
                                            </li>
                                            <li>
                                                <LoginButton />
                                            </li>
                                        </ul>
                                    </div>

                                </nav>
                            </div>

                            {/* Mobile Menu  */}
                            <div className="mobile-menu">
                                <nav className="menu-box">
                                    <div className="close-btn"><i className="fas fa-times" /></div>
                                    <div className="nav-logo"><a href="/#"><img src="assets/img/logo/logo-header.svg" alt="Logo MySticker" title="Logo MySticker" /></a>
                                    </div>

                                    <S.MobileNav>
                                        <main>
                                            <header>
                                                {user ? (
                                                    <>
                                                        <div className="avatar">
                                                            <img src="/assets/img/use-avatar.svg" alt="" />
                                                        </div>

                                                        <h5>{user?.name}</h5>
                                                    </>
                                                ) : (
                                                    <button onClick={handleLogin} className='not-logged'>
                                                        <>
                                                            <div className="avatar">
                                                                <img src="/assets/img/use-avatar.svg" alt="" />
                                                            </div>
                                                        </>
                                                        <h5>{t('header.do_login')}</h5>
                                                    </button>
                                                )}
                                            </header>

                                            <ul>
                                                {menuItems.map(item => (
                                                    <MobileNav
                                                        key={item.id}
                                                        id={item.id}
                                                        icon={item.icon}
                                                        title={item.title}
                                                        children={item.children}
                                                        selectedMenu={item.selectedMenu}
                                                        setSelectedMenu={item.setSelectedMenu}
                                                        onClick={item.onClick}
                                                        needsAuth={item.needsAuth}
                                                    />
                                                ))}
                                            </ul>
                                        </main>

                                        <footer>
                                            <ul>
                                                <li>
                                                    <a href="https://discord.gg/uGyxrDAQgy" target="blank">
                                                        <DiscordIcon />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://twitter.com/pruu_oficial" target="blank">
                                                        <TwitterIcon />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" target="blank">
                                                        <OpenseaIcon />
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="https://www.instagram.com/pruu_oficial/" target="blank">
                                                        <InstagramIcon />
                                                    </a>
                                                </li>
                                            </ul>
                                        </footer>
                                    </S.MobileNav>
                                </nav>
                            </div>
                            <div className="menu-backdrop" />
                        </div>
                    </div>
                </div>

            </div>

        </header>

    )
}

export default Header
