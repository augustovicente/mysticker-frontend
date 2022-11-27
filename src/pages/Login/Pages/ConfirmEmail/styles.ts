import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100%;
    padding: 0 24px;
    overflow: hidden;
    background: url('/assets/img/others/world.png') no-repeat center/cover;

    header {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;

        h3 {
            font-size: ${({ theme }) => theme.fontSizes.heading4};
            color: ${({ theme }) => theme.colors.white};
            font-weight: 300;
            text-align: center;
            white-space: pre;

            strong {
                font-weight: bold;
            }

            &::after {
                content: '';
                display: block;
                width: 28%;
                height: 5px;
                background: ${({ theme }) => theme.colors.colorMiddle};
                border-radius: 25px;
                margin: 12px auto 0;
            }
        }
    }

    main {
        margin: 0 auto;
        a.link-home {
            display: block !important;
            margin: 44px auto;
            text-decoration: underline;
            text-align: center;
            color: ${({ theme }) => theme.colors.light};
        }
    }


    @media screen and (max-width: 768px) {
        padding: 24px 18px;

        footer img {
            height: 94px;
        }
    }
`;
