import React, { useContext, useState } from "react"
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"
import { SideBarContext } from "./context"
import { menuItems } from "./menuItes"
import { HandleCollapseButton, MenuItem, SideBarContainer, YourWalletCard } from "./styles"

const SideBar = () => {
    const { isCollapsed, setIsCollapsed } = useContext(SideBarContext)
    const { t } = useTranslation();

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
                    {menuItems.map(({ icon, link, title }, index) => (
                        <li key={index}>
                            <MenuItem
                                to={link}
                            >
                                <img src={icon} />
                                <h3>{t("sidebar."+title)}</h3>
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
