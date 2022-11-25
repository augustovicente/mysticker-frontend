import styled from "styled-components";

export const Container = styled.section`
    margin-top: 164px;
    display: grid;
    gap: 54px;
    padding: 0 80px 80px 80px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        div.title {
            display: flex;
            align-items: center;
            gap: 20px;

            h2 {
                font-size: ${({ theme }) => theme.fontSizes.heading3};
                color: ${({ theme }) => theme.colors.white};
                margin: 0;
            }
        }

        div.dots {
            display: flex;
            gap: 26px;

            div.dot {
                height: 37px;
                width: 37px;
                background: ${({ theme }) => theme.colors.colorMiddle};
                border-radius: 50%;
                transition: filter 0.3s ease-in-out;

                &:hover {
                    cursor: pointer;
                    filter: brightness(0.8);
                }
            }
        }
    }

    main {
        width: 100%;
        background: ${({ theme }) => theme.colors.middle};
        border-radius: 12px;
        padding: 44px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

        svg.logo {
            max-width: 340px;
            width: 100%;
            height: auto;
            opacity: 0.05;
        }

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

        > div {
            display: flex;
            justify-content: space-between;
            align-items: center;
            max-width: 1040px;
            flex-wrap: wrap;
            margin: 0 auto;
            gap: 12px;
            padding: 0 40px;
        }

        form {
            width: 45%;
            display: flex;
            flex-direction: column;
            gap: 32px;

            h5 {
                font-weight: 900;
                font-size: ${({ theme }) => theme.fontSizes.lg};
                color: ${({ theme }) => theme.colors.white};
                margin-bottom: 32px;
            }

            button[type="submit"] {
                margin-top: 24px;
                width: 100%;
                min-width: 190px;
                padding: 10px;
                background: ${({ theme }) => theme.gradients.yellow};
                border-radius: 10px;
                color: ${({ theme }) => theme.colors.middle};
                font-weight: 900;
                font-size: ${({ theme }) => theme.fontSizes.lg};
                display: flex;
                justify-content: center;
                align-items: center;

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
            color: ${({ theme }) => theme.colors.light};
        }
    }

    @media (max-width: 1040px) {
        main form {
            width: 100%;
        }

        svg.logo {
            margin: 24px auto 12px;
        }
    }

    @media (max-width: 768px) {
        padding: unset;
        div {
            width: 100%;
        }

        header {
            display: none;
        }

        main {
            padding: 18px;

            > div {
                padding: 0;
            }
        }

        main form {
            width: 100%;
            padding: 12px;

            h5 {
                margin-bottom: 0;
            }

            button[type="submit"] {
                max-width: fit-content;
            }
        }

        div.message-reset {
            flex-direction: column-reverse;
            align-items: center;
            display: flex;
            padding: 24px 0;

            strong {
                max-width: 45%;
                text-align: center;

                &::after {
                    width: 50% !important;
                    margin: 0 auto;
                }
            }
        }

        a.to-home {
            display: block !important;
            margin: 44px auto 12px;
            text-decoration: underline;
            color: ${({ theme }) => theme.colors.light};
        }

        svg.logo {
            display: none;
        }
    }
`;
