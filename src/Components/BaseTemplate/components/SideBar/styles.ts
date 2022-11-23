import { Link, NavLink } from "react-router-dom";
import styled, { css } from "styled-components"

export const SideBarContainer = styled.div`
    display: flex;
    position: fixed;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.middle};
    height: 100vh;
    z-index: 999;
    gap: 16px;
    max-width: 94px;

    @media (max-width: 768px) {
        display: none;
    }

    header {
        display: flex;
        width: 100%;
        padding: 58px 0; justify-content: center;
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
        padding: 0;
        flex: 1;

        ul {
            display: flex;
            flex-direction: column;
            gap: 5px 0;

            li {
                a {
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
    isBlocked?: boolean;
}

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
        padding: 0 12px;
        text-align: center;
        line-height: 130%;
    }

    i {
        margin-left: auto;
        color: ${({ theme }) => theme.colors.colorMiddle};
    }
`