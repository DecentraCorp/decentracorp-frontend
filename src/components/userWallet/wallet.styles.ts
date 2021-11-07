import styled from 'styled-components'

export const ConBtn = styled.button`
    display: flex;
    margin: 9%;
    align-items: center;
    justify-content: center;
    text-align: center;
    background: none;
    border: none;
    background-color: #01ffa5;
    border-radius: 6px;
    width: 198px;
    height: 90px;
    font-family: Spartan;
    font-weight: 600;
    font-size: 18px;
    line-height: 20.16px;
    color: #2b3030;
    border: none;
    margin-right: 2em;
    cursor: pointer;
`

export const BoxContainer = styled.div`
    display: grid;
    grid-gap: 100px;
    grid-row: 10px;
    grid-template-columns: 120px 120px 120px;
    grid-template-areas:
    "1 2 3"
    "4 5 6";
`

export const A = styled.a`
  color: #01ffa5;
  margin-left: 10%;
`
export const Div = styled.div`
 color: #01ffa5;
  margin-left: 10%;
`

export const H1 = styled.h1`
 color: #01ffa5;
 /* background-color: #2b3030; */
 max-width: 100%;
 align-items: center;
 justify-content: center;
 text-align: center;
 
`

export const Icon = styled.img`
 max-height: 34px;
 padding-right: 24%;
`