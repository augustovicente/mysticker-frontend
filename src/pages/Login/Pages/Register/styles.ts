import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    background: url('assets/img/others/world.png') no-repeat center/contain;
    padding: 0 24px;

    form {
        margin: 64px 0px;
        img {
            display: block;
            max-height: 124px;
            height: 100%;
            object-fit: contain;
            opacity: 0.10;
            pointer-events: none;
            user-select: none;
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
                display: flex;
                justify-content: center;
                align-items: center;
                border: 1px solid ${({ theme }) => theme.colors.colorMiddle};
                width: 100%;
                padding: 8px 0;
                margin: 32px auto 0;

                a {
                    color: ${({ theme }) => theme.colors.white};
                    font-size: ${({ theme }) => theme.fontSizes.lg};
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
    }
`;
