import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 65%;
    margin-top: 3em;
    margin-bottom: 4em;
    margin-left: auto;
    margin-right: auto;
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
    width: 40%;
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
    justify-content: left;
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

export const FormWrapper = styled.div`
    width: 70%;
    margin-top: 2em;
    margin-bottom: 3em;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;


export const Span = styled.span`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #353b3b;
    color: white;
`;