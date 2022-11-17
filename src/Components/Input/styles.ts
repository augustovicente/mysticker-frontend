import styled from "styled-components";

export const ContainerTextInput = styled.div<{ isMobile: boolean }>`
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

        &:focus {
            outline: 2px solid ${({ theme }) => theme.colors.colorMiddle} !important;
        }

        &::placeholder {
            font-size: inherit;
            color: #CCCCCC;

            ${({ isMobile, theme }) => isMobile && `
                color: ${theme.colors.light};
            `};
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

    button.show-password {
        background: transparent;
        height: 30px;
        width: 30px;
        border-radius: 50%;
        position: absolute;
        bottom: 6px;
        right: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        i#password-icon {
            color: ${({ theme }) => theme.colors.light};
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
