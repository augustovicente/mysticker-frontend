import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { SideBarContext } from "./context"
import { menuItems } from "./menuItes"
import { HandleCollapseButton, MenuItem, SideBarContainer, YourWalletCard } from "./styles"

const SideBar = () => {
    const { isCollapsed, setIsCollapsed } = useContext(SideBarContext)

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
                            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_857_2906)">
                                    <path d="M32.7548 12.8476L22.0094 2.10079C20.6794 0.774773 18.878 0.0301514 17 0.0301514C15.122 0.0301514 13.3206 0.774773 11.9907 2.10079L1.24527 12.8476C0.849203 13.2411 0.535191 13.7094 0.321434 14.2252C0.107677 14.741 -0.00157307 15.294 1.71126e-05 15.8524V29.7598C1.71126e-05 30.887 0.447784 31.968 1.24481 32.765C2.04184 33.562 3.12285 34.0098 4.25002 34.0098H29.75C30.8772 34.0098 31.9582 33.562 32.7552 32.765C33.5523 31.968 34 30.887 34 29.7598V15.8524C34.0016 15.294 33.8924 14.741 33.6786 14.2252C33.4648 13.7094 33.1508 13.2411 32.7548 12.8476ZM21.25 31.1765H12.75V25.6033C12.75 24.4761 13.1978 23.3951 13.9948 22.5981C14.7918 21.8011 15.8728 21.3533 17 21.3533C18.1272 21.3533 19.2082 21.8011 20.0052 22.5981C20.8023 23.3951 21.25 24.4761 21.25 25.6033V31.1765ZM31.1667 29.7598C31.1667 30.1355 31.0174 30.4958 30.7518 30.7615C30.4861 31.0272 30.1257 31.1765 29.75 31.1765H24.0834V25.6033C24.0834 23.7247 23.3371 21.923 22.0087 20.5946C20.6803 19.2662 18.8786 18.52 17 18.52C15.1214 18.52 13.3197 19.2662 11.9913 20.5946C10.663 21.923 9.91668 23.7247 9.91668 25.6033V31.1765H4.25002C3.87429 31.1765 3.51396 31.0272 3.24828 30.7615C2.98261 30.4958 2.83335 30.1355 2.83335 29.7598V15.8524C2.83466 15.4769 2.98379 15.1171 3.24843 14.8508L13.9939 4.1082C14.7924 3.31335 15.8733 2.86712 17 2.86712C18.1267 2.86712 19.2076 3.31335 20.0062 4.1082L30.7516 14.855C31.0152 15.1203 31.1643 15.4784 31.1667 15.8524V29.7598Z" fill="#6345EE" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_857_2906">
                                        <rect width="34" height="34" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>

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
                            <MenuItem to={link}>
                                <img src={icon} />
                                <h3>{title}</h3>
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
