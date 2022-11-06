import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 194px;

    header {
        display: grid;
        grid-template-columns: 344px 1fr;
        gap: 24px;

        span {
            width: 30px;
            height: 30px;
            background: ${({ theme }) => theme.colors.middleL};
        }
    }

    div.grid {
        display: grid;
        grid-template-columns: 344px 1fr;
        gap: 24px;
    }

    header {
        width: 100%;
        margin-bottom: 48px;

        h1 {
            margin: 0;
            color: ${({ theme }) => theme.colors.white};
            margin-left: 32px;
            font-size: ${({ theme }) => theme.fontSizes.heading3};
        }
    }


    div.menu {
        background: linear-gradient(0deg, rgba(29, 25, 51, 0.14) 0%, #1D1933 100%);
        border-radius: 12px;
        height: 100%;
    }
`;
