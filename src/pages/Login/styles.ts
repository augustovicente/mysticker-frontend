import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    background: url('assets/img/others/world.png') no-repeat center/contain;

    form {
        max-width: 600px;
        width: 100%;
        background: ${({ theme }) => theme.colors.middle};
        padding: 32px;
        display: flex;
        flex-direction: column;
        border-radius: 12px;

        h1 {
            color: ${({ theme }) => theme.colors.white};
            margin-bottom: 16px;
        }

        div.container-inputs {
            display: grid;
            gap: 42px;
        }

        button[type='submit'] {
            margin-top: 64px;
            border-radius: 8px;
            padding: 8px 16px;
            font-size: ${({ theme }) => theme.fontSizes.lg};
            background: ${({ theme }) => theme.colors.greenNeon};
            font-weight: bold;
            color: ${({ theme }) => theme.colors.dark};
            display: flex;
            justify-content: center;
            align-items: center;

            &:hover {
                filter: brightness(0.8);
            }
        }
    }
`;
