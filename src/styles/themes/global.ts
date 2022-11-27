import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    input, button {
        border: 0;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        overflow-x: hidden;
    }

    body {
        position: relative;
        font-family: ${({ theme }) => theme.fontFamily.inter}, sans-serif;
        font-size: 1rem; // 16px
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased !important;
        font-weight: 400;
        background: ${({ theme }) => theme.colors.dark};
        width: 100%;
    }
    html, body, #root, .App {
        height: 100%;
    }

    button, textarea, a, span {
        font-family: 'Inter', sans-serif;
    }

    .ant-radio-wrapper {
        color: white;
    }

    @media (max-width: 767px) {
        html {
            font-size: 0.875rem;
        }
    }

    @media (max-width: 380px) {
        html {
            font-size: 0.75rem;
        }
    }
`;
