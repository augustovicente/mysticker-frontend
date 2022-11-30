import styled from "styled-components"
import { Col, Modal } from 'antd'
import { motion } from "framer-motion";

type StickerProps = {
    pasted: boolean;
}

export const AlbumContainer = styled.div`
    margin-top: 164px;
    padding-bottom: 94px;
    display: grid;
    padding: 0 80px 80px 80px;
    position: relative;

    .album-header-container {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.875rem;

        .title {
            display: flex;
            align-items: center;
            color: white;
            font-size: 2.438;
            margin: 0;

            img {
                width: 3.063rem;
                height: 3.063rem;
                margin-right: 1.313rem;
            }

            margin-bottom: 1.5rem;
        }

        .teams-name-list {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;

            li {
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                height: 27px;
                padding: 0 1rem;
                background: ${props => props.theme.colors.middle};
                border-radius: 32px;
                cursor: pointer;

                &.selected {
                    background: ${props => props.theme.colors.colorMiddle};
                }
            }

            margin-bottom: 1.688rem;
        }

        .team-icons-list {
            display: flex;
            gap: 0.875rem;
            max-width: calc(100vw - 260px);
            padding-bottom: 0.875rem;
            overflow-x: scroll;

            &::-webkit-scrollbar {
                height: 10px;
            }

            li, .available-packages {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-content: center;
                min-width: 66px;
                width: 66px;
                min-height: 92.47px;
                background: ${props => props.theme.colors.middleL};
                border-radius: 10px;
                font-size: .5rem;
                font-weight: bold;
                color: white;
                padding: 0.5rem 0.375rem;
                text-align: center;
                cursor: pointer;

                &.selected {
                    background: ${props => props.theme.colors.colorMiddle};
                }

                img {
                    border: 5px ${props => props.theme.colors.colorDark} solid;
                    border-radius: 100%;
                    margin-top: .375rem;
                }
            }

            .available-packages {
                border: 2px solid ${props => props.theme.colors.greenNeon};
                background: ${props => props.theme.colors.dark};
                background-image: url("/assets/img/icons/available-package-bg.svg");
                background-repeat: no-repeat;
                background-position: top;
                background-size: contain;

                p {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    letter-spacing: -5px;
                    color: ${props => props.theme.colors.greenNeon};
                    font-size: 1.563rem;
                    font-weight: bold;
                    margin: 0;
                    height: 59px;

                    span {
                        font-size: 2.813rem;
                        margin: 0;
                        width: 34px;
                    }
                }

            }

            @media (max-width: 768px) {
                max-width: calc(100vw - 50px);
            }
        }
    }

    .album-main-content-container {
        display: flex;
        width: 100%;
        background: ${props => props.theme.colors.geenDark};
        border: 5px solid ${props => props.theme.colors.blue};
        border-radius: 1.125rem;
        padding: 22px 26px;

        .album-main-content {
            display: flex;
            position: relative;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background-image: url("/assets/img/others/album-main-content-bg.svg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 10px 34px 75px 34px;

            .header {
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
                font-size: 24px;
                font-weight: bold;
                color: white;

                button {
                    background: transparent;
                    color: white;
                }

                .header-counter {
                    display: flex;
                    flex: 1;
                    align-items: center;
                    height: 80px;

                    .current-counter {
                        font-size: 4rem;
                        margin-bottom: 1.5rem;
                    }

                    .total-counter {
                        font-size: 1.875rem;
                    }
                }

                .header-title {
                    display: flex;
                    justify-content: center;
                    flex: 1;

                    .title {
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 11px 27px;
                        border-radius: 12px;
                        height: 50px;
                        min-width: 329px;
                        background: linear-gradient(to right, rgba(70, 148, 255, 1), rgba(181, 59, 254, 1));
                    }
                }

                .fill {
                    flex: 1;
                    justify-content: flex-end;
                    display: flex;
                    font-weight: bold;
                    font-size: 24px;
                }

                @media (max-width: 1100px) {
                    .header-counter {
                        display: none;
                    }

                    .fill {
                        display: none;
                    }
                }
            }

            .sticker-container {
                display: flex;
                margin-top: 81px;
                justify-content: space-between;

                .sticker-content-desktop, .sticker-content-mobile {
                    display: flex;
                    justify-content: space-between;
                    width: 100%;

                    .sticker-row {
                        display: flex;
                        max-width: 40%;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 60px;
                        height: fit-content;
                    }
                }

                .sticker-content-mobile {
                    display: none;
                }

                @media (max-width: 1134px) {
                    .sticker-content-desktop {
                        display: none;
                    }

                    .sticker-content-mobile {
                        display: flex;

                        .sticker-row {
                            max-width: 100%;
                            justify-content: center;

                        }
                    }
                }

                @media (max-width: 576px) {
                    .sticker-row {
                        gap: 20px !important;
                    }
                }

            }
        }

        @media (max-width: 768px) {
            padding: unset;
            margin: 0;
            margin-top: 80px;

            .album-main-content {
                padding: 0 20px 20px 20px;
                margin-bottom: 90px;
                .header {
                    justify-content: center !important;

                    .header-title {
                        position: absolute;
                        top: -80px;
                    }
                }
            }
        }

        @media (max-width: 428px) {
            .album-main-content {
                padding: 0;

                .header {
                    .header-title {
                        .title {
                            min-width: unset;
                            width: 80vw;
                        }
                    }
                }
            }
        }


        @media (max-width: 576px) {
            width: 90vw;
        }
    }

    @media (max-width: 768px){
        padding: 0;
    }
`

export const AlbumModal = styled(Modal)`
    top: 20vh;
    width: 296px !important;
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

            .sticker {
                transition: none !important;
                display: flex;
                justify-content: center;
                align-items: center;
                position: relative;
                width: 100%;
                height: 259.3px;
                border: white 3px solid;
                border-radius: 8px;
                cursor: pointer;
                background: ${props => props.theme.colors.dark};

                span {
                    font-size: 1.25rem;
                    font-weight: bold;
                    position: absolute;
                    top: 3px;
                    right: 12px;
                    background-image: linear-gradient(to right, rgba(70, 148, 255, 1), rgba(48, 229, 132, 1));
                    background-clip: text;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                }

                img {
                    width: 132px;
                    height: 144px;
                }

                .add-icon {
                    position: absolute;
                    height: 68px;
                    width: 68px;
                }

                .player-img {
                    display: flex;
                    position: absolute;
                    top: 9.5px;
                    height: 88%;
                    width: 93%;

                    &.loading {
                        background: red;
                        width: 30vw;
                        height: 30vw;
                    }
                }

                .player-tier {
                    display: flex;
                    position: absolute;
                    height: 78.21px;
                    width: 50.4px;
                    bottom: -28px;
                    right: 8px;
                    z-index: 2;
                }

                .player-base-tier {
                    display: flex;
                    position: absolute;
                    width: 94%;
                    height: 20px;
                    bottom: 6.5px;
                }
            }

            .rarity-number {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-top: .5rem;

                .rarity {
                    display: flex;
                    flex-direction: column;
                    font-size: 15px;
                    color: white;

                    span {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        border-radius: 4px;
                        font-size: 15px;
                        font-weight: bold;
                        text-transform: uppercase;
                        color: ${props => props.theme.colors.middle};
                        background: ${props => props.theme.colors.yellow};
                        letter-spacing: 0px;
                    }
                }

                span {
                    font-size: 2.813rem;
                    color: white;
                    font-weight: bold;
                    letter-spacing: -2px;
                }
            }

            .next-preview-sticker {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                position: relative;
                margin-top: 0.5rem;

                .next-preview {
                    display: flex;
                    justify-content: space-between;
                    width: 70%;
                    padding: 8px 28px;
                    background: ${props => props.theme.colors.colorMiddle};
                    border-radius: 30px;
                    z-index: 2;

                    button {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background: transparent;
                    }
                }

                .next-preview-line {
                    position: absolute;
                    display: flex;
                    width: 100%;
                    height: 2px;
                    content: "";
                    background: ${props => props.theme.colors.lightGrey};
                }
            }

            .paste-sell-buy-container {
                display: flex;
                flex-direction: column;
                gap: 13px;
                margin-top: 22px;

                .paste-sell-buy-btn {
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    width: 100%;
                    color: white;
                    background: transparent;
                    border: 2px ${props => props.theme.colors.lightGrey} solid;
                    height: 43px;
                    border-radius: 8px;

                    img {
                        flex: 1;
                        align-self: center;
                        max-height: 24px;
                    }

                    p {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100%;
                        text-align: center;
                        flex: 1;
                        font-weight: bold;
                        font-size: 0.75rem;
                        margin: 0;
                        text-transform: uppercase;
                    }

                    span {
                        display: flex;
                        align-self: center;
                        flex: 1;
                    }

                    &[disabled] {
                        cursor: not-allowed;
                    }
                }
            }

            .modal-close {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                position: absolute;
                width: 88px;
                height: 30.32px;
                top: -20%;
                left: -25%;
                border-radius: 8px;
                padding: 2px;

                p, span {
                    margin: 0;
                }

                span {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100%;
                    width: 30%;
                    border-radius: 8px;

                    background: ${props => props.theme.colors.middle};
                    margin-right: 5px;
                }

                p {
                    color: ${props => props.theme.colors.middle};
                    font-weight: bold;
                    font-size: 15px;
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

export const StikerContainer = styled(motion.div)<StickerProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    ${props => props.pasted
        ?
            `
                width: 140px;
                height: 188px;

                @media (max-width: 1440px) {
                    width: 120px;
                    height: 180px;
                }

                @media (max-width: 578px) {
                    width: 95px;
                    height: 138px;
                }
            `
        :
            `
                width: 140px;
                height: 188px;
                border: white 3px solid;

                @media (max-width: 1440px) {
                    width: 120px;
                    height: 180px;
                }

                @media (max-width: 578px) {
                    width: 95px;
                    height: 138px;
                }
            `
    }

    border-radius: 8px;
    cursor: pointer;
    background: ${props => props.theme.colors.dark};

    span {
        font-size: 10px;
        font-weight: bold;
        position: absolute;
        top: 3px;
        right: 12px;
        background-image: linear-gradient(to right, rgba(70, 148, 255, 1), rgba(48, 229, 132, 1));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }

    img {
        width: 72.16px;
        height: 78.93px;
    }

    .add-icon {
        position: absolute;
        height: 37px;
        width: 37px;
    }

    .player-img {
        display: flex;
        position: absolute;
        top: 24%;
        object-fit: contain;
        scale: 2;
    }

    .player-tier {
        display: flex;
        position: absolute;
        height: 42.91px;
        width: 27.71px;
        bottom: -15px;
        right: 0px;
        z-index: 2;
    }

    .player-base-tier {
        display: flex;
        position: absolute;
        width: 100%;
        height: 7.5%;
        bottom: 6px;
    }

    @media (max-width: 1440px) {
        .player-img {
            top: 8px;
        }

        .player-base-tier {
            height: 6.5%;
            bottom: 8px;
        }
    }
`
