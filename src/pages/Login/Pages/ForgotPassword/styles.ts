import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    padding: 0 24px;

    form {
        header {
            margin-bottom: 28px;
            h1 {
                &::after {
                    content: '';
                    display: block;
                    width: 28%;
                    height: 5px;
                    background: ${({ theme }) => theme.colors.colorMiddle};
                    border-radius: 25px;
                    margin-top: 12px;
                }
            }
        }

        div.message-email {
            strong {
                color: ${({ theme }) => theme.colors.lightGrey};
                font-weight: 700;
                line-height: 180%;
            }

            b {
                color: ${({ theme }) => theme.colors.greenNeon};
            }

            p {
                color: ${({ theme }) => theme.colors.lightGrey};
            }

            img {
                display: block;
                margin: 18px auto 0;
                max-width: 100%;
                height: 124px;
            }
        }

        footer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 32px;
            button[type='submit'] {
                border-radius: 8px;
                padding: 8px 18px;
                min-width: 200px;
                min-height: 46px;
                max-height: 46px;
                font-size: ${({ theme }) => theme.fontSizes.lg};
                background: ${({ theme }) => theme.colors.greenNeon};
                color: ${({ theme }) => theme.colors.dark};
                font-weight: bold;
                display: flex;
                justify-content: center;
                align-items: center;

                &:not([disabled]):hover {
                    filter: brightness(0.8);
                }
            }

            img {
                display: block;
                height: 124px;
                object-fit: contain;
                opacity: 0.10;
                pointer-events: none;
                user-select: none;
            }
        }

        @media screen and (max-width: 768px) {
            padding: 24px 18px;

            footer img {
                height: 94px;
            }
        }
    }
`;
