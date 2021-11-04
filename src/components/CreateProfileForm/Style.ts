import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: #2E3534;
    justify-content: center;
    align-items: center;
`;

export const InnerWrap = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 80%;
    height: 80%;
    background-color: rgb(62, 216, 157, 0.4);
    border-radius: 10px;
`;

export const H1 = styled.h1`
    font-size: 36px;
    line-height: 48px;
`;

export const P = styled.p`
    font-size: 13px;
    line-height: 18px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 40%;
    align-items: center;
`;

export const Label = styled.label`
    margin-bottom: 0.3em;
    font-size: 16px;
    line-height: 20px;
    width: 90%;
`;

export const Input = styled.input`
    background-color: #02FFA5;
    border-radius: 8px;
    height: 40px;
    width: 90%;
    margin-bottom: 1em;
    border: none;
`;

export const SubmitBtn = styled.input`
    align-self: center;
    background-color: #02FFA5;
    width: 100%;
    height: 50px;
    border: 1px solid #02FFA5;
    border-radius: 20px;
    font-size: 18px;
    line-height: 23px;
    font-weight: 600;
    color: black;
`;