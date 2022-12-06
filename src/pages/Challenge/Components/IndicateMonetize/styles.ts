import styled from "styled-components"

export const IndicateMonetizeContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 210px;
    height: 65px;

    .link-btn {
        background: transparent;
        color: white;
        border-radius: 30px;
        border: ${({ theme }) => theme.colors.green } 1px solid;
        padding: 8px 20px;
        margin-bottom: 8px;

        &.gradient-purple {
            border: ${({ theme }) => theme.colors.purple } 2px solid;
            color: ${({ theme }) => theme.colors.dark };
        }
    }

    .copy-btn {
        display: flex;
        justify-content: center;
        align-items: center;
        background: transparent;
        color: ${({ theme }) => theme.colors.blue };

        &.gradient-purple {
            color: white;
        }

        .copy-img {
            height: 14px;
            width: 14px;
        }

        span {
            font-size: 0.75rem;
            text-decoration: underline;
            margin-left: 5px;
        }

        &:hover {
            filter: brightness(1.2);
        }
    }
`
