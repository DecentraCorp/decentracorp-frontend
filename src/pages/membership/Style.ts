import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100%;
`;

export const InfoDisplayWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 3em;
    justify-content: center;
`;

export const TransactionHistory = styled.div`
    width: 100%;
    background-color: rgba(99, 109, 108, 0.4);
    height: 100%;
    margin-top: 2em;
    border-radius: 8px;
`;

export const WhiteDisplay = styled.h2`
    font-family: Spartan;
    font-weight: 700;
    font-size: 1.5rem;
    margin-top: 1.5em;
    margin-bottom: 0;
    padding-bottom: 0;
    text-align: center;
`;

export const Link = styled.a`
    text-decoration: none;
    color: #01ffa5;
`;