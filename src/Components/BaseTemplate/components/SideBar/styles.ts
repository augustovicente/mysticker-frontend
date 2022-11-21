import { Link } from "react-router-dom";
import styled from "styled-components"

type SideBarContainerProps = {
    collapsed?: boolean;
}

export const SideBarContainer = styled.div<SideBarContainerProps>`
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: flex-start;
    width: ${props => props.collapsed ? "7%" : "17%"};
    background-color: var(--middle);
    height: 100vh;
    z-index: 999;

    header {
        display: flex;
        width: 100%;
        height: 20%;
        ${props => props.collapsed ? "padding: 58px 0; justify-content: center;" : "padding: 58px 38px 0px 38px;"}

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
        height: 50%;
        padding: ${prosp => prosp.collapsed ? "0" : "0px 0 0px 38px"};

        ul {
            display: flex;
            flex-direction: column;
            gap: ${prosp => prosp.collapsed ? "5px 0" : "10px 0"};

            li {
                a {
                    ${prosp => prosp.collapsed &&
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
        padding: 0px 38px 46px 38px;
        height: 30.7%;
    }
`

type HandleCollapseButtonProps = {
    collapsed?: boolean;
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

export const MenuItem = styled(Link)`
    display: flex;
    align-items: center;
    min-height: 52px;
    padding: 0.875rem;
    width: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

    &:hover {
        background: linear-gradient(to right, rgba(43, 38, 72, 1), rgba(43, 38, 72, 0));
        border-right: 6px ${props => props.theme.colors.colorDark} solid;
    }

    img {
        height: 1.5rem;
        margin-right: 1rem;
    }

    h3 {
        font-size: .875rem;
        margin: 0;
        color: white;
    }
`

export const YourWalletCard = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    padding: 1.5rem;
    border-radius: 20px;
    background: linear-gradient(to right, rgba(99, 69, 238, 0.68), rgba(99, 69, 238, 0.21));

    h5 {
        color: white;

    }

    button {
        background: linear-gradient(to right, rgba(48, 229, 132, 1), rgba(151, 255, 87, 1));
        height: 40px;
        border-radius: 12px;
        font-weight: bold;
        margin-top: 26px;

        img {
            margin-left: 10px;
        }
    }
`
