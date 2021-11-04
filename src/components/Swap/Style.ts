import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    margin-top: -6.5em;
    margin-bottom: 4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: rgba(99, 109, 108, 0.3);
    box-shadow: 0px 4px 6px 4px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    @media (max-width: 800px) {
        margin-top: 1em;
    }
`;

export const SwitchContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 75%;
    height: 70px;
    justify-content: center;
    align-items: center;
    margin-top: 1em;
`;

export const DropdownContainer = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
`;

export const DropdownBox = styled.div`
    width: 100%;
    background:#353B3B;
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: auto;
    height: 50px;
    padding-left: 2.5%;
    box-shadow: 10px 14px 28px -18px #01ffa5;
`;

export const Input = styled.input`
    width: 48%;
    height: 80%;
    background-color: #353B3B;
    margin-right: 0;
    box-shadow: none;
    outline: none;
    color: white;
    font-size: 19px;
    border: none;
    &:focus {
        box-shadow: inset 10px 14px 28px -25px #01ffa5;
        border-radius: 10px;
    }
`;

export const P = styled.p`
    font-family: Spartan;
    font-weight: 600;
    font-size: 0.938rem;
    line-height: 0.93rem;
    text-align: left;
    margin-bottom: 0;
    padding-bottom: 0;
`;

export const AltP = styled.p`
    font-family: Spartan;
    font-weight: 600;
    font-size: 0.938rem;
    line-height: 0.93rem;
    text-align: right;
    margin: 0.5em 0 0 0;
`;

export const CenterImage = styled.img`
    background-color: #01ffa5;
    height: 48px;
    width: 48px;
    border-radius: 50%;
    margin: 2em auto 0 auto;
    box-shadow: 45px 35px 50px -26px #293231;
    opacity: 0.7;
`;

export const SwapBtn = styled.button`
    background-color: #01ffa5;
    color: #2B3030;
    font-family: Spartan;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 20px;
    width: 100%;
    height: 61px;
    border-radius: 6px;
    margin-top: 3em;
    margin-bottom: 3em;
    border: none;
`;

export const Span = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #353b3b;
    color: white;
`;

export const Image = styled.img`
    height: 30px;
    width: 30px;
    margin-right: 1em;
`;