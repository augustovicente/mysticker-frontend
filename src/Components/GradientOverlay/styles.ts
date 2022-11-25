import styled from 'styled-components';

export const Container = styled.div`
    background: linear-gradient(180deg, rgba(113, 113, 254, 0.245) 0%, rgba(254, 75, 108, 0) 100%);
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1 !important;
    height: 30vh;
    transform: rotate(-180deg);
    width: 100%;
    pointer-events: none;
    user-select: none;
`;
