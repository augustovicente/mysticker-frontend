import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components"

type SideBarContainerProps = {
    collapsed?: boolean;
}

export const SideBarContainer = styled.div<SideBarContainerProps>`
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.middle};
    height: 100vh;
    z-index: 999;
    gap: 16px;

    @media (max-width: 768px) {
        display: none;
    }

    header {
        display: flex;
        width: 100%;
        ${props => props.collapsed ? "padding: 58px 0; justify-content: center;" : "padding: 58px 24px 0px 24px;"};

        .sidebar-home-icon {
            height: 34px;
            transition: all 0.3s;

            &:hover {
                filter: brightness(1.2);
            }
        }

        .sidebar-logo {
            display: flex;
            width: 100%;
            a {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 30px;

                img {
                    display: flex;
                    width: 180px;
                    justify-content: start;
                }
            }
        }
    }

    main {
        padding: ${props => props.collapsed ? "0" : "0px 0 0px 24px"};
        flex: ${({ collapsed }) => collapsed ? "1" : "0"};

        ul {
            display: flex;
            flex-direction: column;
            gap: ${props => props.collapsed ? "5px 0" : "10px 0"};

            li {
                a {
                    ${props => props.collapsed &&
                        `
                            display: flex;
                            flex-direction: column;
                            padding: 8px 0;

                            img {
                                margin-bottom: 0.75rem;
                                margin-right: 0;
                            }

                            &::after {
                                content: "";
                            }
                        `
                    }
                }
            }

        }
    }

    footer {
        padding: 0px 24px 46px 24px;
        flex: 1;
        max-height: 290px;
    }
`

type HandleCollapseButtonProps = {
    collapsed?: boolean;
    isBlocked?: boolean;
}

export const HandleCollapseButton = styled.button<HandleCollapseButtonProps>`
    display: flex;
    position: absolute;
    right: -28px;
    top: 55px;
    background: ${props => props.theme.colors.colorMiddle};
    width: 28px;
    height: 47px;
    justify-content: center;
    align-items: center;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;

    img {
        transform: ${props => props.collapsed ? "rotate(180deg)" : "rotate(0deg)"};
    }
`

export const MenuItem = styled(NavLink) <HandleCollapseButtonProps>`
    display: flex;
    align-items: center;
    min-height: 52px;
    padding: 0.875rem;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    position: relative;

    cursor: ${({ isBlocked }) => isBlocked ? "not-allowed" : "pointer"};

    ${({ isBlocked }) => !isBlocked && css`
        &:hover {
            background: linear-gradient(to right, rgba(43, 38, 72, 1), rgba(43, 38, 72, 0));
            &::after {
                content: "";
                position: absolute;
                min-width: 6px;
                max-width: 6px;
                top: 0;
                right: 0;
                height: 100%;
                background: ${({ theme }) => theme.colors.colorMiddle};
                border-radius: 25px;
            }
        }

        &.active {
            &::after {
                content: "";
                position: absolute;
                min-width: 6px;
                max-width: 6px;
                top: 0;
                right: 0;
                height: 100%;
                background: ${({ theme }) => theme.colors.colorMiddle};
                border-radius: 25px;
            }
        }
    `}

    img {
        height: 1.5rem;
        margin-right: 1rem;
    }

    h3 {
        font-size: .875rem;
        margin: 0;
        color: white;
        padding: ${({ theme, collapsed }) => !collapsed ? "0" : "0 12px"};
        text-align: center;
        line-height: 130%;
    }

    i {
        margin-left: auto;
        color: ${({ theme }) => theme.colors.colorMiddle};
    }
`

export const YourWalletCard = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 12px;
    background: linear-gradient(to right, rgba(99, 69, 238, 0.68), rgba(99, 69, 238, 0.21));

    h5 {
        color: ${({ theme }) => theme.colors.white};
    }

    button {
        background: linear-gradient(to right, rgba(48, 229, 132, 1), rgba(151, 255, 87, 1));
        border-radius: 8px;
        font-weight: bold;
        margin-top: 26px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        &:hover {
            background: linear-gradient(to right, rgba(48, 229, 132, 1), rgba(151, 255, 87, 1));
            background-size: 200% auto;
            animation: gradient 1s ease infinite;

            @keyframes gradient {
                0% {
                    background-position: 0% 50%;
                }
                50% {
                    background-position: 100% 50%;
                }
                100% {
                    background-position: 0% 50%;
                }
            }
        }
    }
`
