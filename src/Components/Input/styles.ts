import styled from "styled-components";

export const ContainerTextInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    position: relative;

    label {
        font-size: ${({ theme }) => theme.fontSizes.md};
        color: #CCCCCCCC;
        font-weight: bold;
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
            color: #CCCCCCCC;
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
