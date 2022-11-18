import styled, { css } from "styled-components";

export const ContainerTextInput = styled.div<{ isMobile: boolean, hasErrors?: boolean }>`
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
        padding-left: ${({ isMobile }) => isMobile ? '44px !important' : '16px'};
        position: relative;

        &.has-password {
            padding-right: 64px !important;
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

    i {
        /* color: white; */
        /* position: absolute; */
        /* top: 30%; */
        /* color: ${({ theme }) => theme.colors.light}; */
        /* left: 16px; */
        /* left: 0; */
    }

    button.show-password {
        background: transparent;
        border-radius: 50%;
        position: absolute;
        right: 0;
        top: 52%;
        width: 34px;
        right: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 2px;

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
`;
