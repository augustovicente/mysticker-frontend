import styled from "styled-components"

export const InvitedFriendsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    div {
        display: flex;
        justify-content: space-between;
        width: 100%;

        h4 {
            margin-bottom: 5px;
            font-size: 1.25rem;

            span {
                color: ${({ theme }) => theme.colors.red};
            }

            @media (max-width: 1440px) {
                font-size: 0.938rem;
            }
        }
    }


    ul {
        display: flex;
        gap: 4px;

        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;



            span {
                width: 100%;
                height: 3px;
                background: ${({ theme }) => theme.colors.light};
                margin-top: 4px;
                border-radius: 3px;
            }

            img {
                opacity: .4;
                width: 16px;
            }

            @media (max-width: 1440px) {
                img {
                    width: 11px;
                }
            }

            &.invited {
                img {
                    opacity: 1;
                }

                span {
                    background: ${({ theme }) => theme.colors.greenNeon};
                }
            }
        }
    }
`


