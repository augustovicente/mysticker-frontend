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

        img {
            border-radius: 50%;
            display: block;
            object-fit: cover;
        }
    }

    div.user-info {
        div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;

            span {
                font-size: ${({ theme }) => theme.fontSizes.md};
            }

            strong.username {
                font-size: ${({ theme }) => theme.fontSizes.lg};
            }
        }

        div:last-child {
            display: flex;
            flex-direction: column;
            /* gap: 12px; */
            margin-top: 44px;

            span.ranking, span.closed-teams {
                display: flex;
                justify-content: space-between;
                align-items: center;
                font-weight: 400;
                line-height: 120%;
                strong {
                    background-color: red;
                    padding: 6px;
                    border-radius: 25px;
                    /* width: 100%; */
                }
            }
        }
    }






`;

