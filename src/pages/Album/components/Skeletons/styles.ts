import Modal from "antd/es/modal"
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

            button.wallet {
                display: flex;
                justify-content: space-between;
                justify-content: center;
                align-items: center;
                padding: 8px 16px;
                border-radius: 25px;
                outline: 2px solid ${({ theme }) => theme.colors.colorMiddle};
                background: ${({ theme }) => theme.colors.colorMiddle};
                cursor: pointer;
                color: ${({ theme }) => theme.colors.white};
                font-size: ${({ theme }) => theme.fontSizes.md};
                font-weight: 700;
                gap: 12px;
                margin-top: 12px;

                &:hover {
                    filter: brightness(0.8);
                }
            }

            span.create-wallet {
                margin-top: 18px;
                font-size: ${({ theme }) => theme.fontSizes.md};
                color: ${({ theme }) => theme.colors.white};
                text-decoration: underline;
            }


            h1 {
                color: ${({ theme }) => theme.colors.white};
                font-size: ${({ theme }) => theme.fontSizes.heading4};
            }

            p {
                font-size: ${({ theme }) => theme.fontSizes.lg};
            }

            a {
                gap: 12px;
                align-items: center;
                background: ${({ theme }) => theme.gradients.blueGreen};
                color: ${({ theme }) => theme.colors.white};
                border-radius: 25px;
                font-weight: bold;
                padding: 10px 24px !important;
                display: flex;
                justify-content: center;
                align-items: center;
                color: ${({ theme }) => theme.colors.dark};

                &:has(svg.login, svg.wallet) {
                    padding: 16px;
                }

                &:hover {
                    filter: brightness(0.8);
                }

                &:has(svg.wallet) {
                    &:hover {
                        color: ${({ theme }) => theme.colors.white};
                    }

                    &::after {
                        background: ${({ theme }) => theme.colors.colorMiddle};
                    }
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

    @media (max-width: 768px) {
        top: 20vh;
        .ant-modal-content .ant-modal-body {
            p {
                font-size: 1rem;
            }
        }
    }
`
