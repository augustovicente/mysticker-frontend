import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 134px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 194px);
    background: url('assets/img/others/world.png') no-repeat center center/contain;

    h1 {
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.heading3};
        margin-bottom: 44px;
    }

    i {
        font-size: 40px;
        color: white;
    }

    a.btn-home {
        display: inline-flex;
        align-items: center;
        font-size: 16px;
        position: relative;
        z-index: 1;
        background: ${({ theme }) => theme.colors.middleL};
        border-radius: 25px;
        padding: 18px 21px;
        transition: .3s ease-in-out;
        color: var(--white);
        line-height: 1;

        &:hover {
            color: ${({ theme }) => theme.colors.dark};
        }

        &::after {
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            width: 51px;
            height: 51px;
            background: ${({ theme }) => theme.colors.greenNeon};
            z-index: -1;
            border-radius: 30px;
            transition: .3s linear;
            box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        }

        &:hover::after {
            width: 100%;
        }

        span {
            margin-left: 48px;
        }

        .banner-btn i {
            line-height: 0;
            margin-left: 12px;
        }

    }
`;
