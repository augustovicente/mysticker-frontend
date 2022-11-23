import styled from "styled-components"
import { Link } from "react-router-dom"

export const LoginButtonContaine = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    min-width: 126px;
    min-height: 42px;
    background: none;
    border-radius: 25px;
    line-height: 1;
    cursor: pointer;
    color: var(--white) !important;
    border: 2px solid var(--color-dark);
    font-size: 1rem !important;
    gap: 18px;
    padding: 4.24px;

    transition: all .2s;

    &:hover {
        background-color: var(--color-dark);
    }
`

export const UserAvatarLogged = styled(Link)`
    display: flex;

    img {
        width: 38px;
        height: 38px;
    }
`
