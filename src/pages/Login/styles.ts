import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    padding: 0 24px;
    background: url('assets/img/others/world.png') no-repeat center/contain;

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
            gap: 24px;
            h1 {
                display: inline-block;
                color: ${({ theme }) => theme.colors.white};
                margin-bottom: 16px;
                font-size: ${({ theme }) => theme.fontSizes.heading3};

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

            span {
                display: inline-block;
                color: #CCCCCC;
            }

            a {
                color: ${({ theme }) => theme.colors.colorMiddle};
                margin-left: 4px;
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

        div.container-inputs {
            display: grid;
            gap: 42px;
        }

        button[type='submit'] {
            border-radius: 8px;
            padding: 8px 64px;
            font-size: ${({ theme }) => theme.fontSizes.lg};
            background: ${({ theme }) => theme.colors.greenNeon};
            color: ${({ theme }) => theme.colors.dark};
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 64px auto 0;

            &:not([disabled]):hover {
                filter: brightness(0.8);
            }
        }

        a.forgot-password {
            color: ${({ theme }) => theme.colors.white};
            margin-top: 16px;
            text-decoration: underline;
            color: #CCCCCC;
            margin: 10px auto;
        }


        @media screen and (max-width: 768px) {
            padding: 24px;
        }
    }
`;
