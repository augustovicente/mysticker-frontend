import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    padding: 0 24px;
    overflow: hidden;

    form {
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

        div.container-inputs {
            display: grid;
            gap: 42px;
        }

        button[type='submit'] {
            border-radius: 8px;
            padding: 8px 64px;
            min-height: 46px;
            max-height: 46px;
            min-width: 184px;
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
    }
`;
