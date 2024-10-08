import React, { useCallback, useEffect, useRef } from "react"
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from "react-router-dom"
import { menuItems } from "./menuItems"
import { MenuItem, SideBarContainer } from "./styles"
import LockIcon from "assets/imgs/lock.svg"
import { useAuth } from "contexts/auth.context";
import { useScrollToElement } from "hooks/useScrollToElement";

const SideBar = () => {
    const { t } = useTranslation();
    const { user } = useAuth();
    const location = useLocation();

    useScrollToElement('.active', location?.pathname)

    const navLinks = user
        ? menuItems
        : menuItems.filter(item => !item.isAuthenticatedRoute);

    return (
        <SideBarContainer>
            <header>
                <div className="sidebar-home-icon">
                    <Link to="/">
                        <img src="assets/img/icons/home-icon.svg" alt="" />
                    </Link>
                </div>
            </header>

            <main>
                <ul>
                    {navLinks.map((menu) => (
                        <li key={menu.link}>
                            <MenuItem
                                isBlocked={menu.blocked}
                                to={menu.link}
                                onClick={(event) => menu.blocked && event.preventDefault()}
                                className={({ isActive, isPending }) =>
                                    isActive
                                        ? "active"
                                        : isPending
                                            ? "pending"
                                            : ""
                                }
                            >
                                {menu.blocked ? (
                                    <img src={LockIcon} alt="" />
                                ) : (
                                    <img src={menu.icon} alt="" />
                                )}

                                <h3>{t("sidebar." + menu.title)}</h3>
                            </MenuItem>
                        </li>
                    ))}
                </ul>
            </main>
        </SideBarContainer>
    )
}

export default SideBar
