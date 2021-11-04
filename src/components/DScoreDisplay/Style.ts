import styled from 'styled-components';


interface StyleProps {
    smaller?: boolean;
}

export const InfoBox = styled.div`
    background-color: rgba(99, 109, 108, 0.4);
    display: flex;
    flex-direction: row;
    justify-content: left;
    height: 144px;
    width: 374.69px;
    border-radius: 8px;
    margin-left: 2em;
    margin-right: 2em;
`;

export const InfoWrapper = styled.div`
 display: flex;
 flex-direction: column;
 justify-content: left;
 width: 45%;
`;

export const InfoHeader = styled.h2<StyleProps>`
    color: #01ffa5;
    font-family: Spartan;
    font-weight: 700;
    font-size: ${(props) => props.smaller ? '1.2rem' : '1.5rem'};
    opacity: 1;
    margin-left: 0.5em;
    margin-bottom: 0;
`;

export const InfoSecondary = styled.h3`
    color: #ffffff;
    font-family: Spartan;
    font-weight: 400;
    font-size: 2.5rem;
    opacity: 1;
    margin-top: 0;
    margin-left: 0.25em;
`;

export const RightBorder = styled.div`
    width: 50%;
    background-image: linear-gradient(180deg, rgba(64,73,72,1) 0%, rgba(1,255,165,1) 47%, rgba(64,73,72,1) 100%);
    padding-left: 0.15em;
`;

export const RightColumn = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    background-color: #404948;
`;

export const TextBox = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 0.01em;
`;

export const InnerText = styled.p`
    font-size: 0.9rem;
    font-family: Spartan;
    font-weight: 400;
    color: #ffffff;
    margin-left: 1em;
    margin-top: 0;
    margin-bottom: 0;
`;
