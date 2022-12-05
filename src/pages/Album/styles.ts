import styled, { css } from "styled-components"
import Modal from 'antd/es/modal'
import { motion } from "framer-motion";

type StickerProps = {
    pasted?: boolean;
    isLatest?: boolean;
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
            overflow-y: visible;
            min-height: 10rem;
            height: fit-content;

            &::-webkit-scrollbar {
                height: 10px;
            }

            li, .available-packages {
                margin: auto 0;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-content: center;
                min-width: 66px;
                width: 66px;
                min-height: 92.47px;
                max-height: 92.47px;
                transition: all 0.5s ease;
                background: ${props => props.theme.colors.middleL};
                border-radius: 10px;
                font-size: .5rem;
                font-weight: bold;
                color: white;
                padding: 0 0.375rem 0.5rem 0.375rem;
                text-align: center;
                cursor: pointer;

                &.selected-team {
                    background: ${props => props.theme.colors.colorMiddle};
                    transform: scale(1.2);
                    margin: auto .5rem;
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
                &.two {
                    p {
                        span {
                            letter-spacing: -.15rem;
                            font-size: 2rem;
                        }
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
                    padding: .5rem 1.5rem;
                    display: flex;
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
                        padding: 11px 10px;
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

                .extra-stickers {
                    display: flex;
                    position: absolute;
                    object-fit: contain;
                    width: 55px;
                    left: -12%;
                    top: -25%;

                    h1 {
                        position: absolute;
                        bottom: 37%;
                        left: 31%;
                        color: white;
                        font-weight: bold;
                        font-size: 1.25rem;
                        height: 20px;
                        width: 20px;
                    }

                    &.two {
                        h1 {
                            font-size: .975rem;
                            bottom: 39%;
                            left: 27%;
                        }
                    }
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
                    height: 155px;
                }

                @media (max-width: 578px) {
                    width: 95px;
                    height: 124px;
                }
            `
        :
            `
                width: 140px;
                height: 188px;
                border: white 3px solid;

                @media (max-width: 1440px) {
                    width: 120px;
                    height: 155px;
                }

                @media (max-width: 578px) {
                    width: 95px;
                    height: 124px;
                }
            `
    }

    border-radius: 8px;
    cursor: pointer;
    background: ${props => props.theme.colors.dark};

    ${({ isLatest, theme }) => isLatest && css`
        background: ${({ theme }) => theme.gradients.blueGreen};

        &:has(.player-pasted) {
            background: ${props => props.theme.colors.dark};
            img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }

        img.background-paste {
            height: 94% !important;
            width: 94% !important;
            object-fit: contain;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 1;
        }

        svg.lock-icon {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            height: 38px;
            width: 38px;
            z-index: 2;

            path {
                fill: ${theme.colors.white};
            }
        }

        footer {
            z-index: 2;
            align-self: flex-end;

            button {
                background: transparent;
                font-size: 10px;
                display: flex;
                gap: 4px;
                justify-content: center;
                align-items: center;
                color: ${({ theme }) => theme.colors.white};
                width: fit-content;
                padding: 6px;
                position: relative;
                margin-bottom: 32px;
                font-weight: bold;
                font-size: 10px;

                svg {
                    path {
                        fill: ${({ theme }) => theme.colors.yellow};
                    }
                }

                &::before {
                    content: "";
                    position: absolute;
                    inset: 0;
                    border-radius: 25px;
                    padding: 2px;
                    background: ${({ theme }) => theme.gradients.blueGreen};
                    -webkit-mask:
                        linear-gradient(#fff 0 0) content-box,
                        linear-gradient(#fff 0 0);
                    -webkit-mask-composite: xor;
                    mask-composite: exclude;
                }
            }

            h6.close-team {
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 14px;
                margin: 0;
                text-align-last: center;
                font-size: 10px;
                color: ${({ theme }) => theme.colors.white};
                width: 100%;
            }
        }

    `};

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

    .extra-stickers {
        display: flex;
        position: absolute;
        object-fit: contain;
        width: 55px;
        left: -20%;
        top: -20%;

        h1 {
            position: absolute;
            bottom: 34%;
            left: 30%;
            color: white;
            font-weight: bold;
            font-size: 1.25rem;
            height: 20px;
            width: 20px;
        }

        &.two {
            h1 {
                font-size: .975rem;
                bottom: 28%;
                left: 27%;
            }
        }
    }

    @media (max-width: 1440px) {
        .player-img {
            top: 30px;
            scale: 1.67;
        }

        .player-base-tier {
            height: 7.6%;
            bottom: 3px;
        }

        .extra-stickers {
            width: 45px;

            h1 {
                font-size: 1rem;
                bottom: 28%;
            }

            &.two {
                h1 {
                    font-size: .75rem;
                    bottom: 25%;
                    left: 27%;
                }
            }
        }
    }

    @media (max-width: 578px) {
        .player-img {
            top: 15px;
            scale: 1.3;
        }

        .player-base-tier {
            height: 7.3%;
            bottom: 4px;
        }

        .extra-stickers {
            width: 45px;

            h1 {
                bottom: 28%;
            }
        }
    }
`

export const PasteStickerModal = styled(Modal)`
    width: fit-content;
    width: 620px !important;
    border: 2px rgba(255, 255, 255, .3) solid;
    padding: 22px 20px;
    border-radius: 10px;
    border: 5px solid ${({ theme }) => theme.colors.greenNeon};

    .ant-modal-content {
        height: 100%;
        background: transparent;

        .ant-modal-body {
            padding: 0 24px 24px 24px;

            main {
                h3 {
                    color: ${({ theme }) => theme.colors.greenNeon};
                    font-size: ${({ theme }) => theme.fontSizes.heading3};
                    margin-bottom: 18px;
                }

                p, strong {
                    line-height: 130%;
                    ${({ theme }) => theme.colors.white}
                }
            }

            footer {
                display: flex;
                justify-content: space-between;
                gap: 64px;
                margin-top: 48px;
                button {
                    padding: 8px 44px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-weight: bold;
                    width: 100%;
                    border-radius: 10px;
                    font-size: ${({ theme }) => theme.fontSizes.lg};
                    max-height: 47px;

                    &:hover:not(:disabled) {
                        filter: brightness(0.8);
                    }

                    &:nth-child(1) {
                        background: ${({ theme }) => theme.colors.greenNeon};
                    }

                    &:nth-child(2) {
                        background: ${({ theme }) => theme.colors.red};
                        color: ${({ theme }) => theme.colors.white};
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
                background: red;

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

    @media (max-width: 768px) {
        .ant-modal-content {
            padding: 0 !important;

            .ant-modal-body {
                padding: 0 0 18px 0 !important;
            }
        }
    }
`
