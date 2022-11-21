import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin-top: 164px;
    display: grid;
    gap: 54px;

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
            width: 41px;
            height: 41px;
        }

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
    }

    section {
        background: ${({ theme }) => theme.colors.middle};
        border-radius: 12px;
        padding: 22px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
            z-index: -1;
            background: linear-gradient(180deg, rgba(29, 25, 51, 0.5) 0%, rgba(29, 25, 51, 0.07) 100%);
            border-radius: 12px;
            transform: matrix(-1, 0, 0, 1, 0, 0);
        }
    }
`;
