import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 124px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 194px);
    background: url('assets/img/others/world.png') no-repeat center center/contain;
    padding: 0 32px;

    h1 {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.heading3};
        margin-bottom: 44px;
        text-align: center;
    }

    i {
        font-size: 40px;
        color: white;
    }

    a.btn-home {
        display: inline-flex;
        gap: 32px;
        align-items: center;
        position: relative;
        z-index: 1;
        background: ${({ theme }) => theme.colors.middleL};
        color: ${({ theme }) => theme.colors.white};
        border-radius: 25px;
        padding: 18px 21px;
        transition: all .3s ease-in-out;
        line-height: 1;

        &:hover {
            color: ${({ theme }) => theme.colors.dark};
        }

        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 58px;
            height: 58px;
            background: ${({ theme }) => theme.colors.greenNeon};
            z-index: -1;
            border-radius: 30px;
            transition: .3s linear;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        &:hover::after {
            width: 100%;
        }

        svg {
            margin-left: -2px;
        }

    }

    @media (max-width: 600px) {
        h1 {
            font-size: ${({ theme }) => theme.fontSizes.xl};
        }

        background-size: cover !important;
    }
`;
