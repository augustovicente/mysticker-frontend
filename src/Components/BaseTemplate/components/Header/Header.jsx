import React, { useContext, useEffect, useState } from 'react'
import $ from 'jquery';

import "./Header.css";
import { LoginButton } from './components/LoginButton';
import { DefaultButton } from './components/DefaultButton';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from 'contexts/auth.context';
import { Avatar, Menu, Radio, Space } from 'antd';
import i18n from 'i18n';
import * as S from './styles';

const Header = (props) => {
    const { user } = useAuth();
    const { hasContainer = true } = props;
    const location = useLocation();

    useEffect(() => {
        //SubMenu Dropdown Toggle
        if ($('.menu-area li.menu-item-has-children ul').length) {
            $('.menu-area .navigation li.menu-item-has-children').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');
        }

        //Mobile Nav Hide Show
        if ($('.mobile-menu').length) {

            var mobileMenuContent = $('.menu-area .push-menu').html();
            $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);

            //Dropdown Button
            $('.mobile-menu li.menu-item-has-children .dropdown-btn').on('click', function () {
                $(this).toggleClass('open');
                $(this).prev('ul').slideToggle(500);
            });

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
        $(".menu-tigger").on("click", function () {
            $(".extra-info,.offcanvas-overly").addClass("active");
            return false;
        });

        $(".menu-close,.offcanvas-overly").on("click", function () {
            $(".extra-info,.offcanvas-overly").removeClass("active");
        });
        /*=============================================
            =     Menu sticky & Scroll to top      =
        =============================================*/
        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $("#sticky-header").removeClass("sticky-menu");
                $('.scroll-to-target').removeClass('open');
                $("#header-top-fixed").removeClass("header-fixed-position");

            } else {
                $("#sticky-header").addClass("sticky-menu");
                $('.scroll-to-target').addClass('open');
                $("#header-top-fixed").addClass("header-fixed-position");
            }
        });


        /*=============================================
            =    		 Scroll Up  	         =
        =============================================*/
        if ($('.scroll-to-target').length) {
            $(".scroll-to-target").on('click', function () {
                var target = $(this).attr('data-target');
                // animate
                $('html, body').animate({
                    scrollTop: $(target).offset().top
                }, 1000);
            });
        }
    }, []);

    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

    const onChange = (e) => {
        i18n.changeLanguage(e.target.value)
        setSelectedLanguage(e.target.value);
    };

    function getItem(label, key, icon, children) {
        return {
            key,
            icon,
            children,
            label,
        };
    }
    const items = [
        getItem('Linguagem', '1', <i className="fi-sr-home"></i>),
        getItem('Whitepaper', '2', <i className="fi-sr-home"></i>),
        getItem('Carteira', 'sub1', <i className="fi-sr-home"></i>, [
            getItem('Option 3', '3'),
            getItem('Option 4', '4'),
            getItem('Submenu', 'sub1-2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
        ]),
        getItem('Prêmios', 'sub2', <i className="fi-sr-home"></i>, [
            getItem('Option 7', '7'),
            getItem('Option 8', '8'),
            getItem('Option 9', '9'),
            getItem('Option 10', '10'),
        ]),
        getItem('Notificações', 'sub3', <i className="fi-sr-home"></i>, [
            getItem('Option 11', '7'),
            getItem('Option 12', '8'),
            getItem('Option 13', '9'),
            getItem('Option 14', '10'),
        ]),
        getItem('Sair', 'logout', <i className="fi-sr-home"></i>),
    ];

    return (
        <header className='main-header'>
            <div id='sticky-header' className="menu-area ">
                <div className={location.pathname === '/' ? 'container' : 'container-fluid'}>
                    <div className="row">
                        <div className="col-12 p-0">
                            <div className="mobile-nav-toggler"><i className="fas fa-bars" /></div>
                            <div className="menu-wrap main-menu">
                                <nav className="menu-nav py-lg-3 py-md-2">
                                    <div className="logo">
                                        <Link to="/">
                                            <img
                                                src="assets/img/logo/logo-header.svg"
                                                alt=""
                                            />
                                        </Link>
                                    </div>
                                    <div className="navbar-wrap push-menu main-menu d-none d-lg-flex">
                                    </div>
                                    <div className="header-action d-none d-sm-none d-lg-block">
                                        <ul>
                                            {
                                                user && (
                                                    <>
                                                        <li>
                                                            <DefaultButton
                                                                title='Prêmios'
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
                                                                title='Notificações'
                                                                icon="/assets/img/icons/notification-icon.svg"
                                                            />
                                                        </li>
                                                        <li>
                                                            <DefaultButton title='Carteira' icon="/assets/img/icons/wallet-icon.svg" />
                                                        </li>
                                                    </>
                                                )
                                            }
                                            <li>
                                                <DefaultButton
                                                    onlyLink='https://google.com'
                                                    title='Whitepaper'
                                                    icon="/assets/img/icons/open-link-icon.svg"
                                                />
                                            </li>
                                            <li>
                                                <DefaultButton title='Idioma' icon="/assets/img/icons/browser-icon.svg">
                                                    <Radio.Group onChange={onChange} value={selectedLanguage}>
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
                                        <header>
                                            <div className="avatar">
                                                <i className="fi-sr-user"></i>
                                            </div>

                                            <h5>{user?.name}</h5>
                                        </header>

                                        <main>
                                            <Menu
                                                style={{ width: 256 }}
                                                defaultSelectedKeys={['1']}
                                                defaultOpenKeys={['sub1']}
                                                mode="inline"
                                                theme='dark'
                                                items={items}
                                            />
                                        </main>

                                    </S.MobileNav>

                                    <div className="social-links">
                                        <ul className="clearfix">
                                            <li><a href="/#"><span className="fab fa-twitter" /></a></li>
                                            <li><a href="/#"><span className="fab fa-facebook-square" /></a></li>
                                            <li><a href="/#"><span className="fab fa-pinterest-p" /></a></li>
                                            <li><a href="/#"><span className="fab fa-instagram" /></a></li>
                                            <li><a href="/#"><span className="fab fa-youtube" /></a></li>
                                        </ul>
                                    </div>
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
