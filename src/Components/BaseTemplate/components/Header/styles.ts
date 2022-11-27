import styled from 'styled-components';

export const MobileNav = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 85vh;
    overflow-y: auto;
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
        margin: 48px auto 24px;
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


export const Wallets = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;

    span.wallet-address {
        font-weight: 500;
        text-align: center;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    span.description {
        text-align: center;
        color: #4694FF;
    }

    button.wallet {
        display: flex;
        justify-content: space-between;
        justify-content: center;
        align-items: center;
        min-width: 210px;
        max-height: 50px;
        padding: 12px 16px;
        border-radius: 25px;
        outline: 2px solid ${({ theme }) => theme.colors.colorMiddle};
        background: transparent;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.md};
        font-weight: 700;
        gap: 12px;

        &:hover {
            background: ${({ theme }) => theme.colors.colorMiddle};
        }
    }

    button.disconnect, .create-wallet {
        background: ${({ theme }) => theme.colors.greenNeon};
        border-radius: 25px;
        max-width: fit-content;
        padding: 2px 18px;
        margin: 18px auto 8px;
        color: ${({ theme }) => theme.colors.middle};

        &:hover {
            filter: brightness(0.8);
        }
    }

`;
