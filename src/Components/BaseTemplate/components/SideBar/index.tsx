import React, { useContext, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from "react-router-dom"
import { SideBarContext } from "./context"
import { menuItems } from "./menuItems"
import { HandleCollapseButton, MenuItem, SideBarContainer, YourWalletCard } from "./styles"
import LockIcon from "assets/imgs/lock.svg"

const SideBar = () => {
    const { isCollapsed, setIsCollapsed } = useContext(SideBarContext)
    const { t } = useTranslation();
    const location = useLocation();

    return (
        <SideBarContainer collapsed={isCollapsed}>
            <HandleCollapseButton
                onClick={() => setIsCollapsed(!isCollapsed)}
                collapsed={isCollapsed}
            >
                <img src="/assets/img/icons/sidebar-white-arrow.svg" />
            </HandleCollapseButton>

            <header>
                {isCollapsed ? (
                    <div className="sidebar-home-icon">
                        <Link to="/">
                            <img src="assets/img/icons/home-icon.svg" alt="" />
                        </Link>
                    </div>

                ) : (
                    <div className="sidebar-logo">
                        <Link to="/" >
                            <img src="assets/img/logo/logo-header.svg" alt="" />
                        </Link>
                    </div>
                )}
            </header>

            <main>
                <ul>
                    {menuItems.map((menu) => (
                        <li key={menu.link}>
                            <MenuItem
                                collapsed={isCollapsed}
                                isBlocked={menu.blocked}
                                title={menu.title}
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
                                {menu.blocked && isCollapsed ? (
                                    <img src={LockIcon} alt="" />
                                ) : (
                                    <img src={menu.icon} />
                                )}

                                <h3>{menu.title}</h3>

                                {menu.blocked && !isCollapsed && (
                                    <i className="fi-sr-lock"></i>
                                )}
                            </MenuItem>
                        </li>
                    ))}
                </ul>
            </main>

            {!isCollapsed && (
                <footer>
                    <YourWalletCard>
                        <h5>Sua Carteira</h5>
                        <button>
                            Conectar

                            <img src="/assets/img/icons/chain-icon.svg" />
                        </button>
                    </YourWalletCard>
                </footer>
            )}
        </SideBarContainer>
    )
}

export default SideBar
