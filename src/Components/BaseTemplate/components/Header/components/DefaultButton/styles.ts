import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

export const DefaultButtonContainer = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.colors.middle};
    padding: .6rem;
    border-radius: 8px;
    width: 40px;

    img {
        height: 18px;
    }
`

export const ProfilePopover = styled.div`
    color: ${({ theme }) => theme.colors.white};
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 240px;
    color: ${({ theme }) => theme.colors.white};

    a {
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            filter: brightness(0.8);
        }
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 16px;

        strong {
            font-weight: 700;
            font-size: ${({ theme }) => theme.fontSizes.md};
            text-align: center;
            flex: 1;
        }

        div.avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.colors.colorMiddle};
            display: grid;
            place-items: center;

            i {
                font-size: 22px;
            }
        }
    }

    div.divider {
        height: 4px;
        background: ${({ theme }) => theme.colors.middleL};
        border-radius: 25px;
        margin: 12px 0;
    }

    section {
        flex-direction: column;
        display: flex;
        width: 100%;
        gap: 16px;

        span {
            margin-left: 16px;
        }
    }
`;
