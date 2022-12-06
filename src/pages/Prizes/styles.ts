import Modal from 'antd/es/modal';
import styled from 'styled-components';

export const RewardsContainer = styled.div`
    margin-top: 8rem;
    display: grid;
    gap: 32px;
    padding: 0 80px 80px 80px;
    overflow: hidden;

    header {
        display: flex;
        align-items: center;

        div.title {
            display: flex;
            gap: 20px;
            align-items: center;

            h2 {
                font-size: ${({ theme }) => theme.fontSizes.heading3};
                color: ${({ theme }) => theme.colors.white};
                margin: 0;
            }
        }
    }

    section {
        overflow-x: auto;
        padding: 12px 0;

        &::-webkit-scrollbar {
            height: 8px !important;
        }

        ul {
            display: flex;
            gap: 12px;
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                padding: 5px 16px;
                min-width: fit-content;
                background: ${({ theme }) => theme.colors.middle};
                border-radius: 25px;
                cursor: pointer;
                transition: all 0.3s ease-in-out;
                font-weight: bold;

                &:hover {
                    background: ${({ theme }) => theme.colors.colorMiddle};
                }

                &#selected-group {
                    background: ${({ theme }) => theme.colors.colorMiddle};
                }
            }
        }
    }

    main {
        background: ${({ theme }) => theme.colors.middle};
        border-radius: 12px;
        padding: 30px;
        display: grid;
        grid-template-columns: 1fr;

        &:has(.right) {
            grid-template-columns: 1fr 340px;
        }

        gap: 64px;
        overflow: hidden;

        aside.left {
            display: flex;
            flex-direction: column;
            overflow: hidden;

            .mobile-reward {
                display: none;
            }

            header {
                display: flex;
                justify-content: space-between;
                align-items: center;
                gap: 64px;

                .group-selector-mobile {
                    display: none;
                }


                div.group {
                    flex: 1;
                    display: flex;
                    align-items: center;
                    padding: 14px 28px 14px 14px;
                    background: ${({ theme }) => theme.gradients.blueGreen};
                    border-radius: 10px;

                    h3 {
                        text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
                        font-weight: 800;
                        text-align: left;
                        font-size: ${({ theme }) => theme.fontSizes.heading3};
                        margin: 0;
                        color: ${({ theme }) => theme.colors.white};
                    }
                }

                div.selector {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    max-width: 200px;
                    width: 100%;
                    background: ${({ theme }) => theme.colors.green};
                    border-radius: 4px;
                    height: 100%;
                    padding: 10px;
                    z-index: 0;

                    div.box-buttons {
                        background: ${({ theme }) => theme.colors.black};
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin: 4px;
                        height: 100%;
                        border-radius: 4px;
                        position: relative;
                        gap: 18px;

                        div.divider {
                            position: absolute;
                            width: 2px;
                            height: 60%;
                            background: ${({ theme }) => theme.colors.white};
                            border-radius: 25px;
                            opacity: 0.30;
                        }

                        &::after {
                            content: '';
                            width: 108%;
                            height: 120%;
                            z-index: -1;
                            background: #d44;
                            left: 50%;
                            top: 50%;
                            transform: translate(-50%, -50%);
                            background: #289165;
                            position: absolute;
                        }

                        button {
                            width: 100%;
                            background: transparent;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            height: 100%;

                            &:disabled {
                                opacity: 0.3;
                            }

                            &:nth-child(3) {
                                svg {
                                    transform: rotate(180deg);
                                }
                            }
                        }
                    }
                }
            }

            div.teams {
                margin-top: 94px;

                ul {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
                    width: 100%;
                    gap: 32px;
                    row-gap: 54px;

                    li {
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 18px;
                        opacity: 0.5;

                        img {
                            display: block;
                            max-width: 100%;
                            height: 94px;
                            width: 94px;
                            border-radius: 50%;
                            object-fit: contain;
                            position: relative;
                            border: ${({ theme }) => theme.colors.middleL} 11px solid;
                        }

                        span {
                            font-weight: bold;
                            color: ${({ theme }) => theme.colors.white};
                        }

                        &.completed {
                            opacity: 1;

                            img {
                                border: ${({ theme }) => theme.colors.purple} 11px solid;
                            }
                        }
                    }
                }
            }
        }

        aside.right {
            border-radius: 20px;
            background: linear-gradient(80deg, #30E584 0%, #93FE58 96.88%, #97FF57 100%);
            position: relative;
            padding: 32px 24px;
            overflow: hidden;
            height: fit-content;

            &::after {
                content: '';
                background: url('/src/assets/imgs/reward-background.png') no-repeat center center/cover;
                width: 100%;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                pointer-events: none;
                user-select: none;
            }

            .slick-dots-bottom {
                gap: 8px !important;
                li {
                    button {
                        background-color: ${({ theme }) => theme.colors.dark} !important;
                        min-width: 24px;
                    }
                }
            }

            &.tracking {
                .redeem-info {
                    span {
                        color: ${({ theme }) => theme.colors.dark} !important;

                        &::before {
                            background: ${({ theme }) => theme.colors.dark} !important;
                        }
                    }
                }
            }

            div.reward {
                /* user-select: none; */
                img {
                    cursor: grab;
                    width: 100%;
                    min-height: 264px;
                    display: block;
                    object-fit: contain;
                    margin-bottom: 32px;
                    max-height: 300px;
                }

                &.tracking {
                    position: relative;

                    img {
                        margin-bottom: 0;
                        opacity: 0.5;
                        pointer-events: none;
                    }

                    .redeem-info {
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                        z-index: 2;

                        span {
                            font-weight: bold;
                            font-size: ${({ theme }) => theme.fontSizes.lg};
                            color: ${({ theme }) => theme.colors.white};
                            text-align: center;
                            width: fit-content;
                            white-space: pre;
                            padding: 12px;
                            position: relative;

                            &::before {
                                content: "";
                                position: absolute;
                                inset: 0;
                                border-radius: 12px;
                                padding: 2px;
                                background: ${({ theme }) => theme.gradients.blueGreen};
                                -webkit-mask:
                                    linear-gradient(#fff 0 0) content-box,
                                    linear-gradient(#fff 0 0);
                                -webkit-mask-composite: xor;
                                        mask-composite: exclude;
                            }
                        }
                    }

                }

                .slick-dots .slick-dots-bottom {
                    li {
                        button {
                            height: 90px !important;
                        }
                    }
                }
            }

            /* div.description {
                footer {
                    h3 {
                        color: ${({ theme }) => theme.colors.dark};
                    }

                    button {
                        background: ${({ theme }) => theme.colors.middle};
                        padding: 12px;
                        width: fit-content;

                        &.tracking {
                            background: ${({ theme }) => theme.colors.dark};

                            span {
                                background: unset;
                                -webkit-background-clip: unset;
                                -webkit-text-fill-color: unset;
                            }
                        }

                        span {
                            color: ${({ theme }) => theme.colors.white};
                            background: linear-gradient(80deg, #30E584 0%, #93FE58 96.88%, #97FF57 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                    }
                } */

            div.description {
                margin: 24px 0;
                border-bottom: 2px solid #40386E;
                p {
                    line-height: 140%;
                    color: ${({ theme }) => theme.colors.light};
                }

                h3 {
                    font-size: ${({ theme }) => theme.fontSizes.heading3};
                    color: ${({ theme }) => theme.colors.middle};
                }
            }

            footer {
                display: flex;
                align-items: center;
                h3 {
                    font-size: ${({ theme }) => theme.fontSizes.heading1};
                    color: ${({ theme }) => theme.colors.white};
                    text-align: left;
                    color: ${({ theme }) => theme.colors.dark};

                    strong {
                        font-size: ${({ theme }) => theme.fontSizes.heading4};
                    }
                }

                button {
                    padding: 14px 18px;
                    border-radius: 12px;
                    font-weight: 900;
                    font-size: ${({ theme }) => theme.fontSizes.lg};
                    margin-left: auto;
                    min-width: 132px;
                    background: ${({ theme }) => theme.colors.middle};

                    span {
                        color: ${({ theme }) => theme.colors.white};
                        background: linear-gradient(80deg, #30E584 0%, #93FE58 96.88%, #97FF57 100%);
                        -webkit-background-clip: text;
                        -webkit-text-fill-color: transparent;
                    }

                    &.tracking {
                        background: ${({ theme }) => theme.colors.green};
                        flex: 1;
                    }

                    &:disabled {
                        opacity: 0.8;
                        cursor: not-allowed;
                    }

                    &:hover:not(:disabled) {
                        filter: brightness(0.8);
                        cursor: pointer;
                    }
                }
            }
        }
    }

    @media (max-width: 1100px) {
        main {
            grid-template-columns: 1fr !important;
            aside.left {
                order: 1;
                header {
                    display: flex;
                    justify-content: center;

                    .group-selector-mobile {
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        h3 {
                            font-size: 32px;
                            font-weight: bold;
                            margin: 0;
                            color: #FFFFFF;
                            margin: 0 1rem;
                            border-bottom: rgba(70, 148, 255, 1) 3px solid;
                            padding-bottom: 12px;
                        }

                        button {
                            background: transparent;
                            padding: 12px;

                            &:nth-child(3) {
                                transform: rotate(180deg);
                            }
                        }
                    }

                    div.group, div.selector {
                        display: none;
                    }
                }
            }

            aside.right {
                img {
                    height: 144px;
                }

                .reward {
                    .slick-dots-bottom {
                        gap: 8px !important;
                        li {
                            button {
                                background-color: ${({ theme }) => theme.colors.dark} !important;
                                min-width: 24px;
                            }
                        }
                    }

                    &.tracking {
                        .redeem-info {
                            span {
                                color: ${({ theme }) => theme.colors.dark} !important;

                                &::before {
                                    background: ${({ theme }) => theme.colors.dark} !important;
                                }
                            }
                        }
                    }
                }

                div.description {
                    h3 {
                        color: ${({ theme }) => theme.colors.middle};
                    }

                    p {
                        color: ${({ theme }) => theme.colors.light};
                    }
                }

                footer {
                    h3 {
                        color: ${({ theme }) => theme.colors.dark};
                    }

                    button {
                        background: ${({ theme }) => theme.colors.middle};
                        padding: 12px;
                        width: fit-content;

                        &.tracking {
                            background: ${({ theme }) => theme.colors.dark};

                            span {
                                background: unset;
                                -webkit-background-clip: unset;
                                -webkit-text-fill-color: unset;
                            }
                        }

                        span {
                            color: ${({ theme }) => theme.colors.white};
                            background: linear-gradient(80deg, #30E584 0%, #93FE58 96.88%, #97FF57 100%);
                            -webkit-background-clip: text;
                            -webkit-text-fill-color: transparent;
                        }
                    }
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: 0px;
    }
`;

export const RewardModal = styled(Modal)`
    .ant-modal-content {
        border: 2px rgba(255, 255, 255, .3) solid;
        border: 0;
        background: transparent;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

        &:has(section.status-redeem) {
            .ant-modal-close {
                outline-color: ${({ theme }) => theme.colors.dark};

                svg {
                    color: ${({ theme }) => theme.colors.dark};
                }
            }
        }

        .ant-modal-close {
            outline: 2px solid ${({ theme }) => theme.colors.colorLight};
            border-radius: 50%;
            height: 28px;
            width: 28px;

            span.ant-modal-close-icon {
            }

            svg {
                width: 16px;
                margin-top: -7px;
                color: ${({ theme }) => theme.colors.colorLight};
            }
        }

        .ant-modal-footer {
            display: none;
        }
    }

`

export const RewardModalContainer = styled.div`
    display: grid;
    grid-template-columns: 390px 1fr;

    section.gift {
        background: ${({ theme }) => theme.colors.greenNeon};
        padding: 44px 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        border-radius: 8px 0 0 8px;



        img.gift-icon {
            position: absolute;
            height: 54px;
            top: 0;
            width: fit-content;
            right: 24px;
        }

        h3 {
            white-space: pre;
            font-size: ${({ theme }) => theme.fontSizes.heading3};
            font-weight: 800;
            position: relative;
        }

        div.img-prize {
            position: relative;

            img {
                display: block;
                object-fit: contain;
                height: 290px;
                width: 100%;
            }

            .drop-sizes {
                position: absolute;
                right: 0;
                bottom: -18px;
            }

            div.select-size {
                display: flex;
                border: 1px solid red;
                padding: 12px;
            }
        }
    }

    section.gift-status {
        background: ${({ theme }) => theme.colors.greenNeon};
        padding: 44px 24px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 24px;
        border-radius: 12px 0 0 12px;

        img {
            padding: 32px;
            border: 1px solid ${({ theme }) => theme.colors.middle};
            border-radius: 12px;
        }
    }

    section.confirm-address {
        padding: 44px;
        background: ${({ theme }) => theme.colors.dark};
        border: 2px solid ${({ theme }) => theme.colors.greenNeon};
        display: flex;
        flex-direction: column;
        border-radius: 0 8px 8px 0;
        flex: 1;

        h3 {
            font-size: ${({ theme }) => theme.fontSizes.heading4};
            color: ${({ theme }) => theme.colors.white};
        }
        p {
            max-width: 70%;
            line-height: 140%;
        }

        div.fake-form {
            display: flex;
            flex-direction: column;
            gap: 12px;
            color: ${({ theme }) => theme.colors.white};
            margin-top: 32px;
            overflow: hidden;

            label {
                font-size: ${({ theme }) => theme.fontSizes.md};
                color: ${({ theme }) => theme.colors.colorLight};
            }

            div.form {
                display: flex;
                align-items: center;
                gap: 12px;
                justify-content: space-between;

                span {
                    line-height: 150%;
                    font-size: ${({ theme }) => theme.fontSizes.md};
                    font-family: 'Nunito', sans-serif;
                    margin-left: 10px;
                }
            }
        }
    }

    section.status-redeem {
        padding: 44px;
        padding-left: 12px;
        background: ${({ theme }) => theme.colors.greenNeon};
        border: 2px solid ${({ theme }) => theme.colors.greenNeon};
        display: flex;
        flex-direction: column;
        border-radius: 0 12px 12px 0;

        h3 {
            font-size: ${({ theme }) => theme.fontSizes.heading4};
            color: ${({ theme }) => theme.colors.dark};
            white-space: pre;
        }
        p {
            color: ${({ theme }) => theme.colors.dark};
        }

        div.status {
            padding: 8px 12px;
            background: linear-gradient(270deg, #4694FF 0%, #B53BFE 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            text-fill-color: transparent;
            position: relative;
            width: fit-content;

            &::before {
                content: "";
                position: absolute;
                inset: 0;
                border-radius: 8px;
                padding: 2px;
                background: linear-gradient(270deg, #4694FF 0%, #B53BFE 100%);
                -webkit-mask:
                    linear-gradient(#fff 0 0) content-box,
                    linear-gradient(#fff 0 0);
                -webkit-mask-composite: xor;
                mask-composite: exclude;
            }

            &.sent {
                background: ${({ theme }) => theme.gradients.blueGreen};
                border-radius: 8px;

                span {
                    -webkit-text-fill-color: ${({ theme }) => theme.colors.white};
                    text-fill-color: transparent;
                    font-weight: bold;
                }

                &::before {
                    background: unset;
                }
            }

            span {
                font-style: italic !important;
            }
        }

        footer {
            display: flex;
            flex-direction: column;
            margin-top: 32px;
            gap: 12px;

            div {
                display: flex;
                gap: 12px;
            }
            span {
                white-space: pre;
                font-size: ${({ theme }) => theme.fontSizes.sm};
                color: ${({ theme }) => theme.colors.dark};
                font-weight: 500;
                line-height: 120%;
            }

            svg.gift-icon {
                path {
                    fill: #4694FF;
                }
            }
        }
    }

    footer {
        margin-top: 44px;
        span {
            font-size: ${({ theme }) => theme.fontSizes.sm};
            color: ${({ theme }) => theme.colors.white};
        }

        div.footer-buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 24px;
            margin-top: 8px;

            button {
                width: 100%;
                background: ${({ theme }) => theme.colors.greenNeon};
                color: ${({ theme }) => theme.colors.dark};
                font-weight: bold;
                font-size: ${({ theme }) => theme.fontSizes.md};
                padding: 6px 6px;
                border-radius: 8px;
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 44px;
                max-height: 44px;

                a {
                    text-decoration: none;
                    height: 100%;
                    width: 100%;
                    color: inherit;
                }

                &:nth-child(2) {
                    background: transparent;
                    color: ${({ theme }) => theme.colors.white};
                    outline: 2px solid ${({ theme }) => theme.colors.colorMiddle};
                }

                &:hover {
                    filter: brightness(0.8);
                }
            }
        }
    }

    @media (max-width: 940px) {
        grid-template-columns: 1fr;
    }

`;
