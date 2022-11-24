import styled, { css } from "styled-components"
import { Link } from "react-router-dom"

export const LoginButtonContainer = styled.button<{ isAuthenticated: boolean }>`
    font-size: 1rem !important;
    gap: 18px;
    padding: 4.24px;
    transition: all .2s ease-in-out;
    background: none;
    border-radius: 25px;
    line-height: 1;
    cursor: pointer;

    ${({ isAuthenticated }) => !isAuthenticated && css`
        display: flex;
        align-items: center;
        justify-content: flex-end;
        min-width: 126px;
        min-height: 42px;
        color: var(--white) !important;
        border: 2px solid ${({ theme }) => theme.colors.colorMiddle};

        &::after {
            content: "Login";
            font-size: 1rem;
            color: var(--white);
            position: absolute;
            left: 26px;
        }

        &:hover {
            background-color: ${({ theme }) => theme.colors.colorMiddle};
        }
    `}
`;

export const ProfilePopover = styled.div`
    color: ${({ theme }) => theme.colors.white};
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;

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
            min-width: 124px;
            max-width: 124px;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
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
