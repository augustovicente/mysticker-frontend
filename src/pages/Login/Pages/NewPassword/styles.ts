import styled from "styled-components";

export const Container = styled.section`
    display: grid;
    place-items: center;
    gap: 54px;
    height: 100vh;
    padding: 0 24px;

    main {
        background: ${({ theme }) => theme.colors.middle};
        border-radius: 12px;
        /* padding: 44px; */
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        max-width: 540px;
        width: 100%;
        height: fit-content;
        position: relative;
        padding: 44px;

        &::before {
            content: '';
            position: absolute;
            top: -32px;
            margin: 0 auto;
            left: 0;
            right: 0;
            width: 85%;
            height: 100%;
            background: red;
            z-index: -1;
            background: linear-gradient(180deg, rgba(29, 25, 51, 0.5) 0%, rgba(29, 25, 51, 0.07) 100%);
            border-radius: 12px;
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }

        form {
            display: flex;
            flex-direction: column;
            gap: 32px;

            h5 {
                font-weight: 800;
                font-size: ${({ theme }) => theme.fontSizes.lg};
                color: ${({ theme }) => theme.colors.white};
            }

            button[type="submit"] {
                margin-top: 24px;
                width: 100%;
                min-width: 190px;
                min-height: 50px;
                padding: 10px;
                background: ${({ theme }) => theme.gradients.yellow};
                border-radius: 10px;
                color: ${({ theme }) => theme.colors.middle};
                font-weight: 800;
                font-size: ${({ theme }) => theme.fontSizes.lg};
                display: flex;
                justify-content: center;
                align-items: center;
                width: fit-content;

                &:hover:not(:disabled) {
                    filter: brightness(0.8);
                }
            }
        }

        div.message-reset {
            display: flex;
            align-items: center;
            gap: 32px;

            strong {
                font-size: ${({ theme }) => theme.fontSizes.lg};
                color: ${({ theme }) => theme.colors.white};

                &::after {
                    content: '';
                    display: block;
                    width: 28%;
                    height: 5px;
                    background: ${({ theme }) => theme.colors.colorMiddle};
                    border-radius: 25px;
                    margin-top: 4px;
                }
            }
        }

        a.link-home {
            display: block !important;
            margin: 44px auto;
            text-decoration: underline;
            text-align: center;
            color: ${({ theme }) => theme.colors.light};
        }

        div.message-reset {
            flex-direction: column-reverse;
            align-items: center;
            display: flex;

            strong {
                text-align: center;
                white-space: pre;
                font-size: ${({ theme }) => theme.fontSizes.heading4};

                &::after {
                    width: 50% !important;
                    margin: 0 auto;
                }
            }
        }

    }

    @media (max-width: 768px) {
        background-size: cover;

        div {
            width: 100%;
        }

        main {
            padding: 18px;

            > div {
                padding: 0;
            }
        }

        main form {
            width: 100%;

            h5 {
                margin-bottom: 0;
            }

            div {
                display: flex;
                margin-bottom: 0;
                padding: 0;
            }

            button[type="submit"] {
                max-width: fit-content;
            }
        }
    }
`;
