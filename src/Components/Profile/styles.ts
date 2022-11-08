import styled from 'styled-components';

export const Container = styled.section`
    padding: 94px 30px;

    background: linear-gradient(180deg, #1D1933 0%, rgba(29, 25, 51, 0.14) 100%);
    border-radius: 12px;
    position: relative;
    color: white;

    &::after {
        content: '';
        position: absolute;
        top: -20px;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 90%;
        height: 44px;
        background: linear-gradient(180deg, rgba(29, 25, 51, 0.5) 0%, rgba(29, 25, 51, 0.07) 100%);
        border-radius: 12px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        z-index: -1;
    }

    div.avatar {
        position: absolute;
        top: -94px;
        margin: 0 auto;
        left: 0;
        right: 0;
        z-index: 1;
        max-width: 164px;
        max-height: 164px;
        width: 100%;
        height: 100%;
        background: ${({ theme }) => theme.colors.middleL};
        border-radius: 50%;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            border-radius: 50%;
            display: block;
            object-fit: cover;
        }
    }

    div.user-info {
        hr {
            border-bottom-color: ${({ theme }) => theme.colors.colorLight};
            border-bottom-width: 2px;
        }

        header {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;

            text {
                font-size: ${({ theme }) => theme.fontSizes.md};
            }

            strong.username {
                font-size: ${({ theme }) => theme.fontSizes.lg};
            }

            button {
                border: 2px solid ${({ theme }) => theme.colors.colorDark};
                background: transparent;
                color: ${({ theme }) => theme.colors.white};
                padding: 12px 24px;
                border-radius: 25px;
                margin: 12px 0;

                &:hover {
                    background: ${({ theme }) => theme.colors.colorDark};
                }
            }
        }

        div.ranking {
            display: flex;
            align-items: center;
            justify-content: space-between;

            strong {
                padding: 8px 14px;
                background: ${({ theme }) => theme.colors.middleL};
                border-radius: 25px;
            }
        }

        div.closed-teams {
            display: flex;
            align-items: center;
            justify-content: space-between;

            div {
                background-color: ${({ theme }) => theme.colors.colorMiddle};
                border-radius: 25px;
                /* padding: 4px; */
                font-weight: bold;
                display: flex;
                align-items: center;
                justify-content: space-between;
                gap: 6px;
                padding: 4px 4px 4px 12px;

                strong {
                    font-size: 1.6rem;
                    margin-right: 3px;
                }

                b {
                    padding: 6px;
                    background: ${({ theme }) => theme.colors.middleL};
                    font-size: ${({ theme }) => theme.fontSizes.md};
                    border-radius: 50%;
                    position: relative;
                }
            }
        }

        span.closed-continents {
            margin-bottom: 12px;
        }

        div.continents {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            gap: 14px;
            row-gap: 22px;
            margin-top: 24px;

            span.continent {
                font-size: ${({ theme }) => theme.fontSizes.md};
                padding: 6px 14px;
                border-radius: 12px;
                background: ${({ theme }) => theme.colors.middleL};
                font-weight: 900;

                &.active {
                    background: ${({ theme }) => theme.gradients.yellow};
                    color: ${({ theme }) => theme.colors.middle}
                }
            }
        }


    }

`;

