import styled from 'styled-components';

export const Container = styled.section`
    margin-top: 8rem;
    display: grid;
    gap: 32px;
    padding: 0 80px 80px 80px;

    article  {
        p {
            font-size: ${({ theme }) => theme.fontSizes.md};
            color: ${({ theme }) => theme.colors.white};
            font-weight: 400;
            line-height: 150%;
        }

        strong {
            display: inline-block;
            margin-bottom: 0.875rem;
            color: ${({ theme }) => theme.colors.white};
        }

        p ~ ul {
            margin-bottom: 2rem;
        }

        ul {
            padding: 0 32px;
            margin: 16px 0;
            color: ${({ theme }) => theme.colors.white};
            list-style: unset;

            li + li {
                margin-top: 0.4rem;
            }
        }
    }
`;
