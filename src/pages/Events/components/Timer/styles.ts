import styled from "styled-components"


export const TimerContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    color: white;

    div {
        display: flex;
        gap: 8px;

        span {
            background: ${({ theme }) => theme.colors.middleL};
            font-size: 1rem;
            color: white;
            padding: 6px 8px;
            border-radius: 9px;
        }
    }

`
