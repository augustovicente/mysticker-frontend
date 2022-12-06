import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    padding: 0 24px;
    height: fit-content;
    overflow: hidden;
    position: relative;
    z-index: 0;

    &.sended {
        height: 100vh;

        header {
            margin-bottom: 12px;
        }
    }

    form {
        margin: 64px 0px;
        img.logo-pru {
            display: block;
            max-height: 124px;
            height: 100%;
            object-fit: contain;
            opacity: 0.10;
            pointer-events: none;
            user-select: none;
        }

        header h1 {
            font-size: ${({ theme }) => theme.fontSizes.heading4};
        }

        div.container-inputs {
            display: grid;
            gap: 42px;
        }

        div.container-buttons {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 16px;

            button:nth-child(2) {
                background: transparent !important;
                border-radius: 8px;
                background: ${({ theme }) => theme.colors.greenNeon};
                color: ${({ theme }) => theme.colors.dark};

                border: 1px solid ${({ theme }) => theme.colors.colorMiddle};
                width: 100%;
                min-height: 46px;
                margin: 32px auto 0;

                a {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: ${({ theme }) => theme.fontSizes.lg};
                    width: 100%;
                    min-height: 46px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            }
        }

        div.container-checkbox {
            display: flex;
            align-items: center;
            gap: 12px;

            label {
                color: ${({ theme }) => theme.colors.lightGrey};
                font-size: ${({ theme }) => theme.fontSizes.md};
                font-weight: 700;
            }

            input[type="checkbox"] {
                width: 25px;
                height: 25px;

                &:focus {
                    outline: 2px solid ${({ theme }) => theme.colors.colorMiddle};
                }

                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 100%;
                    border-radius: 4px;
                    border: 2px solid #9DD2F1;
                    background: ${({ theme }) => theme.colors.dark};
                }

                &:checked {
                    &::after {
                        background: transparent;
                        border: transparent;
                    }
                }
            }
        }

        button[type='submit'] {
            border-radius: 8px;
            width: 100%;
            padding: 8px 0;
            min-height: 46px;
            max-height: 46px;
            font-size: ${({ theme }) => theme.fontSizes.lg};
            background: ${({ theme }) => theme.colors.greenNeon};
            color: ${({ theme }) => theme.colors.dark};
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 32px auto 0;

            &:not([disabled]):hover {
                filter: brightness(0.8);
            }

            &[disabled] {
                cursor: not-allowed;
            }
        }

        div.message-email {
            strong {
                color: ${({ theme }) => theme.colors.lightGrey};
                font-weight: 700;
                line-height: 180%;
            }

            img {
                display: block;
                margin: 18px auto 0;
                max-width: 100%;
                height: 124px;
            }
        }
    }
`;
