import styled, { css } from "styled-components";

export const ContainerTextInput = styled.div<{ isMobile?: boolean, hasErrors?: boolean, hasIconLeft?: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;

    label {
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: #CCCCCCCC;
        font-weight: bold;
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number]{
        -moz-appearance: textfield;
    }

    input.the-input {
        width: 100%;
        border-radius: 8px;
        padding: 18px 16px;
        background: ${({ theme }) => theme.colors.dark};
        color: ${({ theme }) => theme.colors.white};
        font-size: ${({ theme }) => theme.fontSizes.md};
        outline: ${({ hasErrors }) => hasErrors ? '1px solid #FF0000' : 'transparent'};
        position: relative;

        ${({ isMobile, hasIconLeft }) => isMobile && hasIconLeft && css`
            padding-left: 54px !important;
        `}

        &.has-password {
            padding-right: 54px !important;
        }

        &:focus {
            outline: 2px solid ${({ theme, hasErrors }) => !hasErrors ? theme.colors.colorMiddle : 'inherit'};
        }

        &::placeholder {
            font-size: inherit;
            color: ${({ theme, isMobile }) => isMobile ? theme.colors.light : '#CCCCCCCC'};
        }

        &:disabled {
            cursor: not-allowed;
            outline: none;
            color: rgba(255, 255, 255, 0.3);

            &::placeholder {
                color: inherit;
            }
        }
    }

    i.left-icon {
        color: white;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.light};
        position: absolute;
        top: 30%;
        left: 16px;
    }

    button.show-password {
        background: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        position: absolute;
        right: 0;
        top: 50%;
        width: 34px;
        height: 34px;
        right: 12px;
        margin: 0;

        &:focus {
            outline: 1px solid ${({ theme }) => theme.colors.colorMiddle};
        }

        i#password-icon {
            color: ${({ theme }) => theme.colors.light};
            font-size: 22px;
            max-height: 26px;
        }
    }

    span.error-msg {
        position: absolute;
        bottom: -28px;
        left: 0;
        color: ${({ theme }) => theme.colors.red};
        font-style: italic;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        margin-left: 0.4rem;
    }

    @media (max-width: 768px) {
        button.show-password {
            top: 23%;
        }
    }
`;
