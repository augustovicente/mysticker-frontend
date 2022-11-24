import styled from 'styled-components';

export const MobileNav = styled.div`
    padding: 30px 25px;

    header {
        display: flex;
        align-items: center;
        gap: 32px;
        .avatar {
            min-width: 74px;
            min-height: 74px;
            width: 74px;
            height: 74px;
            border-radius: 50%;
            background: red;
            display: flex;
            justify-content: center;
            align-items: center;
            background: linear-gradient(270deg, #30E584 0%, #97FF57 100%);

            i {
                font-size: 44px;
            }
        }

        h5 {
            color: ${({ theme }) => theme.colors.white};
            font-size: ${({ theme }) => theme.fontSizes.lg};
        }
    }

`;
