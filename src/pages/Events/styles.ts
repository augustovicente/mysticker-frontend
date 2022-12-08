import styled from "styled-components"

export const EventsContainer = styled.div`
    margin-top: 164px;
    padding-bottom: 94px;
    display: grid;
    padding: 0 80px 80px 80px;
    position: relative;

    @media (max-width: 768px) {
        padding: 0;
    }


    h1.events-title {
        display: flex;
        justify-content: start;
        align-items: center;
        font-size: 39px;
        color: white;
        margin-bottom: 2.5rem;

        img {
            height: 48px;
            width: 48px;
            margin-right: 15px;
        }
    }

    main.events-content {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 100%;
        background: #181630;
        border-radius: 12px;
        padding: 22px 28px;
        gap: 27px;
        position: relative;

        div.main-events-container {
            display: flex;
            height: 100%;
            align-items: flex-end;
            width: 60%;
            height: 552px;

            div.main-events-content {
                display: flex;
                justify-content: flex-end;
                position: relative;
                left: 0;
                top: 0;
                flex-direction: column;
                width: 100%;
                height: 80%;
                border-radius: 9px;
                padding: 22px 24px;
                background-color: ${({ theme }) => theme.colors.middleL};
                gap: 40px;
                margin-top: 20vh;

                div.botecoverso-container {
                    display: flex;
                    position: absolute;
                    min-height: 329px;
                    width: calc(100% - 48px);
                    background: ${({theme}) => theme.colors.red};
                    padding: 26px;
                    border-radius: 10px;
                    top: -23%;
                    left: 24px;

                    div.title-timer {
                        display: flex;
                        flex-direction: column;

                        h3 {
                            font-size: 39px;
                            color: white;
                            margin: 0;
                            width: 50%;
                            margin-bottom: 18px;
                        }

                        p {
                            display: flex;
                            margin: 0;
                            color: white;
                            font-weight: bold;
                            font-size: 12px;
                            width: 50%;
                        }

                        div.timer {
                            display: flex;
                            width: 43%;
                            flex-direction: column;
                            margin-top: 26px;

                            div.timer-footer {
                                display: flex;
                                height: 36px;
                                background: ${({ theme }) => theme.colors.middleL};
                                width: 100%;
                                border-radius: 9px;
                                margin-top: 9px;
                            }
                        }
                    }

                    div.botecoverso-img {
                        position: absolute;
                        right: 0;
                        top: 0;
                        border-radius: 10px;
                        display: flex;
                        width: 60%;
                        height: 100%;
                        background: ${({theme}) => theme.colors.orange};
                    }
                }

                ul.socials-list-mobile {
                    display: none;
                }

                ul.socials-list {
                    display: flex;
                    justify-content: space-between;
                    gap: 22px;

                     li.socials {
                        display: flex;
                        position: relative;
                        flex-direction: column;
                        border-radius: 10px;
                        padding: 15px;
                        align-items: center;
                        justify-content: start;
                        min-height: 167px;

                        h4 {
                            display: flex;
                            width: 100%;
                            text-align: start;
                            color: white;
                            font-size: 20px;
                            margin: 0;
                            margin-bottom: 15px;
                        }

                        p {
                            display: flex;
                            width: 100%;
                            margin: 0;
                            color: white;
                            font-size: 12px;
                        }

                        div.socials-icon {
                            display: flex;
                            position: absolute;
                            justify-content: center;
                            align-items: center;
                            bottom: -20px;
                            border-radius: 16px;
                            width: 75px;
                            height: 75px;
                            background: ${({theme}) => theme.colors.middleL};
                        }
                     }
                }
            }
        }

        div.next-macthes-container, div.next-macthes-container-mobile {
            display: flex;
            width: 40%;
            flex-direction: column;
            align-items: center;

            h3.title {
                position: absolute;
                font-size: 15px;
                background: ${({ theme }) => theme.colors.greenNeon};
                color: ${({ theme }) => theme.colors.middleL};
                padding: 8px 11px;
                border-radius: 9px;
            }

            ul.matches-list {
                display: flex;
                width: 100%;
                flex-direction: column;
                gap: 17px 0;
                margin-top: 10px;

                li {
                    display: flex;
                    width: 100%;
                    align-items: center;
                    justify-content: space-between;
                    background-color: ${({ theme }) => theme.colors.middleL};
                    border-radius: 16px;
                    padding: 23px 45px 15px 45px;

                    div.team-icon-name {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;

                        img {
                            height: 39px;
                            width: 39px;
                            margin-bottom: 11px;
                            border: 3px ${({ theme }) => theme.colors.purple} solid;
                            border-radius: 100%;
                        }

                        h5 {
                            margin: 0;
                            font-size: 12px;
                            font-weight: bold;
                            text-transform: uppercase;
                            color: white;
                        }
                    }

                    div.match-datehour {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        color: white;
                        font-weight: lighter;
                        font-size: 10px;

                        span {
                            color: white;
                            font-size: 15px;
                            font-weight: bold;
                            height: 18px;
                        }
                    }
                }
            }
        }

        div.next-macthes-container-mobile {
            display: none;
        }

        @media (max-width: 1440px) {
            div.main-events-container {
                div.main-events-content {
                    div.botecoverso-container {
                        div.botecoverso-img {
                            width: 55%;
                        }
                    }
                }
            }
        }

        @media (max-width: 1320px) {
            div.next-macthes-container {
                display: none;
            }

            div.next-macthes-container-mobile {
                display: flex;
                width: 100%;

                h3.title {
                    position: unset;
                }
            }

            div.main-events-container {
                width: 100%;
                height: auto;

                div.main-events-content {
                    margin-top: 0vh;
                    background-color: unset;
                    padding: 0;

                    div.botecoverso-container {
                        position: relative;
                        width: 100%;
                        left: unset;
                        top: unset;

                        div.title-timer {
                            h3 {
                                width: 100%;
                                justify-content: center;
                                text-align: center;
                            }
                        }
                    }
                }
            }
        }

        @media (max-width: 768px) {
            background: none;
            padding: 0;

            div.main-events-container {
                position: unset;

                div.main-events-content {
                    align-items: center;
                    margin-top: 20vh;
                    position: unset;

                    div.botecoverso-container {
                        background: #181630;
                        width: calc(100% - 30px);
                        justify-content: center;
                        position: unset;

                        div.title-timer {
                            width: 100%;
                            background: ${({theme}) => theme.colors.red};
                            justify-content: center;
                            align-items: center;
                            border-radius: 10px;
                            padding: 26px;
                            z-index: 2;

                            h3 {
                                width: 60%;
                                text-align: start;
                            }

                            p {
                                width: 60%;
                            }

                            div.timer {
                                align-items: center;
                                width: 100%;
                            }
                        }

                        div.botecoverso-img {
                            display: flex;
                            width: calc(100%);
                            height: 282px;
                            top: 0%;
                            left: -2%;
                            z-index: 1;
                        }
                    }

                    ul.socials-list {
                        display: none;
                    }

                    ul.socials-list-mobile {
                        display: flex;
                        max-width: 94vw;
                        overflow: auto;
                        gap: 24px;
                        padding-bottom: 20px;
                        padding-top: 40px;

                        li.socials {
                            display: flex;
                            min-width: 358px;
                            max-width: 358px;
                            min-height: 304px;
                            max-height: 304px;
                            border-radius: 12px;
                            background: ${({ theme }) => theme.colors.middle};
                            padding: 33px 28px 40px 28px;

                            div.socials-content {
                                position: relative;
                                display: flex;
                                flex-direction: column;
                                justify-content: flex-end;
                                align-content: center;
                                border-radius: 12px;
                                text-align: center;

                                h4 {
                                    display: flex;
                                    justify-content: center;
                                    margin: 0;
                                    color: white;
                                    font-size: 30px;
                                    margin-bottom: 20px;
                                }

                                p {
                                    display: flex;
                                    justify-content: center;
                                    align-self: center;
                                    width: 70%;
                                    margin: 0;
                                    color: white;
                                    font-size: 14px;
                                    margin-bottom: 35px;
                                 }

                                div.socials-icon {
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    position: absolute;
                                    align-self: center;
                                    top: -55px;
                                    z-index: 99;
                                    background-color: ${({ theme }) => theme.colors.middle};
                                    border-radius: 1rem;
                                    height: 125.97px;
                                    width: 114.9px;

                                    img {
                                        width: 50px;
                                        height: 50px;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`
