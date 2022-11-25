import styled from "styled-components"

export const AlbumContainer = styled.div`
    margin-top: 164px;
    padding-bottom: 94px;
    display: grid;
    padding: 0 80px 80px 80px;

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

            li, .available-packages {
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-content: center;
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
        }
    }

    .album-main-content-container {
        display: flex;
        width: 100%;
        height: 1029px;
        background: ${props => props.theme.colors.geenDark};
        border: 5px solid ${props => props.theme.colors.blue};
        border-radius: 1.125rem;
        padding: 22px 26px;

        .album-main-content {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: 100%;
            background-image: url("/assets/img/others/album-main-content-bg.svg");
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            padding: 10px 34px;

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
                    justify-content: space-between;
                    align-items: center;
                    padding: 11px 27px;
                    border-radius: 12px;
                    height: 50px;
                    min-width: 329px;
                    background: linear-gradient(to right, rgba(70, 148, 255, 1), rgba(181, 59, 254, 1));
                }
            }
        }
    }

    @media (max-width: 768px) {
        padding: unset;
    }
`
