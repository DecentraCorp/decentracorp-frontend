import styled from 'styled-components';

export const Wrapper = styled.nav`
    background-color: #2B3534;
    height: 85px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    z-index: 12;
`;

export const Nav = styled.a`
    color: #01FFA5;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-family: Spartan;
    font-size: 1.6rem;
    margin: 1em;
    &.active {
        color: 'white'
    }
`;

export const LogoWrapper = styled.img`
    margin-left: 3em;
`;

export const Title = styled.h1`
    font-size: 1.9rem;
    font-family: Spartan;
    font-weight: 600;
    line-height: 30px;
    color: #01ffa5;
    margin-left: 1em;
    margin-right: auto;
`;

export const WalletBtn = styled.button`
    background-color: #01ffa5;
    border-radius: 6px;
    width: 198px;
    height: 51px;
    font-family: Spartan;
    font-weight: 600;
    font-size: 18px;
    line-height: 20.16px;
    color: #2b3030;
    border: none;
    margin-right: 2em;
    cursor: pointer;
`;

export const CloseBtn = styled.button`
    background-color: #01ffa5;
    /* border-radius: 6px; */
    width: 250px;
    height: 26px;
    font-family: Spartan;
    font-weight: 600;
    font-size: 18px;
    line-height: 20.16px;
    color: #2b3030;
    border: none;
    margin-top: 1em;
    cursor: pointer;
`;