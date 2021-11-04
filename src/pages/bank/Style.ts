import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    @media (max-width: 800px) {
        width: 100%;
        height: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const ChartBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin-top: 2em;
    @media (max-width: 800px) {
        margin-top: 8em;
        width: 100%;
    }
`;

export const ToggleBox = styled.div`
    width: 30%;
    height: 50%;
    margin-top: 15%;
    margin-left: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: 800px) {
        width: 100%;
        margin-top: 4em;
    }
`;