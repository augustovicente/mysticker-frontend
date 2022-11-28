import styled, { keyframes } from 'styled-components';

export const RewardsContainer = styled.div`
    margin-top: 8rem;
    display: grid;
    gap: 54px;
    padding: 0 80px 80px 80px;

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
        ul {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
            li {
                display: flex;
                justify-content: center;
                align-items: center;
                color: white;
                padding: 5px 16px;
                background: ${({ theme }) => theme.colors.middle};
                border-radius: 32px;
                cursor: pointer;
                transition: all 0.4s ease-in-out;
                font-weight: bold;

                &:hover {
                    background: ${({ theme }) => theme.colors.colorMiddle};
                }

                &.selected {
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
        grid-template-columns: 1fr 340px;
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
                    padding: 12px;
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
                        gap: 24px;

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
                        cursor: pointer;
                        opacity: 0.4;

                        img {
                            display: block;
                            max-width: 100%;
                            height: 94px;
                            border-radius: 50%;
                            object-fit: contain;
                            position: relative;
                            border: ${({ theme }) => theme.colors.middleL} 11px solid;

                            &::after {
                                position: absolute;
                                content: '';
                                width: 100%;
                                height: 100%;
                                border-radius: 50%;
                                background: ${({ theme }) => theme.gradients.blueGreen};
                                opacity: 0.5;
                                z-index: 3;
                            }
                        }

                        span {
                            font-weight: bold;
                            color: ${({ theme }) => theme.colors.white};
                        }

                        &.selected {
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
            display: flex;
            flex-direction: column;
            gap: 12px;
            align-items: center;
            border-radius: 20px;
            background: ${({ theme }) => theme.colors.dark};
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
            }

            div.reward {
                margin-top: 44px;
            }

            h1 {
                font-size: ${({ theme }) => theme.fontSizes.heading3};
                color: ${({ theme }) => theme.colors.white};
                margin: 0;
                text-align: left;
            }
        }
    }

    @media (max-width: 1100px) {
        main {
            grid-template-columns: 1fr;
            aside.left {
                .mobile-reward {
                    display: flex;
                }

                .mobile-reward {
                    flex-direction: column;
                }

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

                            &:nth-child(3) {
                                transform: rotate(180deg);
                                margin-top: .45rem;
                            }
                        }
                    }

                    div.group, div.selector {
                        display: none;
                    }
                }
            }

            aside.right {
                display: none;
            }
        }
    }

    @media (max-width: 768px) {
        padding: 0px;
    }
`;


