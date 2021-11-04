import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100%;
    width: 100%;
    background-color: #293231;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em;
    padding-bottom: 2em;
    text-align: center;
`;

export const Input = styled.input`
    width: 80%;
    height: 40px;
    background-color: #353B3B;
    margin-right: 0;
    box-shadow: none;
    outline: none;
    color: white;
    font-size: 19px;
    border: none;
    border-radius: 10px;
    &:focus {
        box-shadow: inset 10px 14px 28px -25px #01ffa5;
        border-radius: 10px;
    }
`;

export const Label = styled.label`
  margin-bottom: 0.3em;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 20px;
  width: 97%;
  display: flex;
  justify-content: space-between;
`;

export const P = styled.p`
    font-family: Spartan;
    width: 70%;
    font-weight: 600;
    font-size: 0.938rem;
    line-height: 0.93rem;
    text-align: left;
    margin-bottom: 0.5em;
    margin-right: auto;
    padding-bottom: 0;
    margin-left: auto;
`;

export const SubmitBtn = styled.input`
    background-color: #01ffa5;
    color: #2B3030;
    font-family: Spartan;
    font-weight: 600;
    font-size: 1.125rem;
    line-height: 20px;
    width: 70%;
    height: 61px;
    border-radius: 6px;
    margin-top: 3em;
    margin-bottom: 3em;
    margin-left: auto;
`;