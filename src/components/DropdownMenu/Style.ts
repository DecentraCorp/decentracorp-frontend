import styled from 'styled-components';

interface StyleProps {
    wide: boolean;
}

export const Container = styled.div<StyleProps>`
    position: relative;
    width: ${(props) => props.wide ? '100%' : '50%'};
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