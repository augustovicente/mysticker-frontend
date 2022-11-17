import styled from "styled-components";

export const Container = styled.section`
    margin-top: 164px;
    display: grid;
    gap: 54px;

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

        div  {
            margin-bottom: 42px;
        }

        form {
            width: 45%;

            h5 {
                font-weight: 900;
                font-size: ${({ theme }) => theme.fontSizes.lg};
                color: ${({ theme }) => theme.colors.white};
                margin-bottom: 32px;
            }

            input {
                padding: 12px !important;
            }

            button {
                margin-top: 24px;
                width: 100%;
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
    }
`;
