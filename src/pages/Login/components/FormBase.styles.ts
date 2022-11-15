import { motion } from 'framer-motion';
import styled from 'styled-components';

export const FormBase = styled(motion.form)`
    max-width: 540px;
    width: 100%;
    background: ${({ theme }) => theme.colors.middle};
    padding: 32px 48px;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    position: relative;

    @media screen and (max-width: 768px) {
        padding: 24px;
    }

    &::before {
        content: '';
        position: absolute;
        top: -32px;
        margin: 0 auto;
        left: 0;
        right: 0;
        width: 85%;
        height: 100%;
        background: red;
        z-index: -1;
        border-radius: 12px;
        background: linear-gradient(180deg, #1D1933 0%, rgba(29, 25, 51, 0) 17.14%);
        border-radius: 12px;
        transform: matrix(-1, 0, 0, 1, 0, 0);
    }

    header {
        margin-bottom: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 24px;
        h1 {
            display: inline-block;
            color: ${({ theme }) => theme.colors.white};
            margin-bottom: 16px;
            font-size: ${({ theme }) => theme.fontSizes.heading3};

            &::after {
                content: '';
                display: block;
                width: 100%;
                height: 5px;
                background: ${({ theme }) => theme.colors.colorMiddle};
                border-radius: 25px;
                margin-top: 12px;
            }
        }

        span {
            display: inline-block;
            color: #CCCCCC;
        }
    }
`;
