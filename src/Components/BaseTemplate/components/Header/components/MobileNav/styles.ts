import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.li<{isSelected?: boolean}>`
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
        width: 26px;
        object-fit: contain;
    }

    span {
        font-size: ${({ theme }) => theme.fontSizes.lg};
        color: #9DD2F1;
        font-weight: 700;
        margin-left: 32px;
    }

    button.arrow-icon {
        position: relative;
        width: 44px;
        background: transparent;

        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: -18px;
            width: 3px;
            height: 100%;
            background: ${({ theme, isSelected }) => isSelected ? theme.colors.colorMiddle : theme.colors.middleL};
            border-radius: 25px;
        }

        svg {
            transition: transform 0.2s ease-in-out;
            stroke: ${({ theme }) => theme.colors.colorMiddle};
            path {
                stroke: ${({ theme, isSelected }) => isSelected ? theme.colors.colorMiddle : theme.colors.middleL};
            }
        }
    }
`;


export const AnimatedChildren = styled(motion.div)`

    div {
        padding: 32px 25px;
        background: ${({ theme }) => theme.colors.middle};
    }
`;
