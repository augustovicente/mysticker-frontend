import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *,
    *::after,
    *::before {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        width: 100%;
        overflow-x: hidden;
    }

    body {
        font-family: ${({ theme }) => theme.fontFamily.inter} !important;
        font-size: 1rem; // 16px
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased !important;
        font-weight: 400;
        background: ${({ theme }) => theme.colors.dark};
    }
`;
