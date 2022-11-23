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
`
