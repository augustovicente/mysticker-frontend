import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px;
    border-top: 2px solid ${({ theme }) => theme.colors.middle};
    width: 100%;

    &:not(:disabled) {
        cursor: pointer;
    }

    div {
        display: flex;
        align-items: center;
    }

    img {
        max-width: 100%;
        height: 34px;
        object-fit: contain;
    }

    span {
        font-size: ${({ theme }) => theme.fontSizes.lg};
        color: #9DD2F1;
        font-weight: 700;
        margin-left: 32px;
    }

    button {
        background: transparent;

        svg {
            transition: transform 0.2s ease-in-out;
            stroke: ${({ theme }) => theme.colors.colorMiddle};
        }
    }
`;


export const AnimatedChildren = styled(motion.div)`

    div {
        padding: 25px;
        background: ${({ theme }) => theme.colors.middle};
    }
`;
