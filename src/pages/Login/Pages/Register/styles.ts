import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    width: 100%;
    background: url('assets/img/others/world.png') no-repeat center/contain;
    margin-top: 144px;
    padding: 24px;

    form {
        max-width: 540px;
        width: 100%;
        background: ${({ theme }) => theme.colors.middle};
        padding: 32px 48px;
        display: flex;
        flex-direction: column;
        border-radius: 12px;
        position: relative;

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
            border-radius: 12px;
            background: linear-gradient(180deg, #1D1933 0%, rgba(29, 25, 51, 0) 17.14%);
            border-radius: 12px;
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }

        header {
            margin-bottom: 48px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            h1 {
                display: inline-block;
                color: ${({ theme }) => theme.colors.white};
                margin-bottom: 16px;

                &::after {
                    content: '';
                    display: block;
                    width: 100%;
                    height: 5px;
                    background: ${({ theme }) => theme.colors.colorMiddle};
                    border-radius: 25px;
                    margin-top: 12px;
                }
            }

            img {
                display: block;
                max-height: 124px;
                height: 100%;
                object-fit: contain;
                opacity: 0.10;
                pointer-events: none;
                user-select: none;
            }
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
        }

        input[type="checkbox"] {
            width: 24px;
            height: 24px;
            border-radius: 4px;
            border: 1px solid ${({ theme }) => theme.colors.colorMiddle};
            background: ${({ theme }) => theme.colors.dark};
            cursor: pointer;
            transition: all 0.2s ease-in-out;
        }

        button[type='submit'] {
            border-radius: 8px;
            width: 100%;
            padding: 8px 0;
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
        }
    }
`;
