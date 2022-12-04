import { Modal } from "antd"
import styled from "styled-components"

export const AlbumStickersContainer = styled.div`
    background: #3C375B;
    width: 85vw;
    height: 100%;
    padding: 40px 70px;
    border-radius: 1.125rem;
`

export const WalletErrorModal = styled(Modal)`
    top: 25vh;
    border: 2px rgba(255, 255, 255, .3) solid;
    padding: 22px 20px;
    background: ${props => props.theme.colors.geenDark};
    border-radius: 10px;

    .ant-modal-content {
        height: 100%;
        border: 2px rgba(255, 255, 255, .3) solid;
        background: ${props => props.theme.colors.geenDark};

        .ant-modal-body {
            position: relative;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            h1 {
                color: ${({ theme }) => theme.colors.white};
                font-size: ${({ theme }) => theme.fontSizes.heading4};
            }

            p {
                font-size: 1.25rem;
            }

            a {
                width: 300px;
                display: inline-flex;
                gap: 32px;
                align-items: center;
                position: relative;
                z-index: 1;
                background: ${({ theme }) => theme.colors.middleL};
                color: ${({ theme }) => theme.colors.white};
                border-radius: 25px;
                padding: 18px 21px;
                transition: all .3s ease-in-out;
                line-height: 1;
                font-size: 1rem;
                font-weight: bold;

                &:has(svg.login, svg.wallet) {
                    padding: 16px;
                }

                &:hover {
                    color: ${({ theme }) => theme.colors.dark};
                }

                &:has(svg.wallet) {
                    &:hover {
                        color: ${({ theme }) => theme.colors.white};
                    }

                    &::after {
                        background: ${({ theme }) => theme.colors.colorMiddle};
                    }
                }

                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: 58px;
                    height: 58px;
                    background: linear-gradient(270deg, #30E584 0%, #97FF57 100%);
                    z-index: -1;
                    border-radius: 30px;
                    transition: .3s linear;
                    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                }

                &:hover::after {
                    width: 100%;
                }

                svg {
                    &.login {
                        /* margin-right: 44px; */
                        path {
                            fill: ${({ theme }) => theme.colors.dark};
                        }
                    }

                    &.wallet {
                        path {
                            fill: ${({ theme }) => theme.colors.white};
                        }
                    }

                    /* margin-left: -2px; */
                }
            }
        }

        .ant-modal-footer {
            display: none;
        }

        .ant-modal-close-x {
            display: none;
        }
    }
`
