import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 240px;
        pointer-events: none;
        user-select: none;
    }

    @media (max-width: 768px) {
        margin-left: 0;
        height: 90vh;

        img {
            max-width: 180px;
        }
    }
`;
