import styled from 'styled-components';

export const MobileNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    main {
        header {
            display: flex;
            align-items: center;
            gap: 32px;
            padding: 32px 25px 34px;
        }

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

            img {
                display: block;
                max-width: 100%;
                width: 100%;
                object-fit: contain;
            }
        }

        h5 {
            color: #9DD2F1;
            font-size: ${({ theme }) => theme.fontSizes.heading4};
            max-width: 70%;
            margin: 0;
        }

        .not-logged {
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            gap: 24px;
            border: 1px solid ${({ theme }) => theme.colors.colorMiddle};
            border-radius: 50px;
            padding: 6px 44px 6px 6px;

            h5 {
                margin: 0;
            }

            &:hover {
                background: ${({ theme }) => theme.colors.colorMiddle};

                h5 {
                    color: ${({ theme }) => theme.colors.white};
                }
            }
        }
    }

    footer {
        width: 280px;
        margin: 0 auto 90px;
        border-radius: 12px;
        padding: 12px;
        background: linear-gradient(151.25deg, #6345EE -23.07%, rgba(99, 69, 238, 0) 128.42%);
        ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
`;
