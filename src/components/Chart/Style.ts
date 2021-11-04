import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 95%;
    height: 90%;
    margin-right: auto;
    margin-left: auto;
`;

export const Background = styled.div`
    background: 'repeating-linear-gradient(to right,white 0 11.11%,transparent 11.11% 22.22%)';
    opacity:'.05';
    z-index:'-3';
    height:'360px';
    width:'480px';
`;

export const LegendWrapper = styled.div`
    display:'flex';
    flex-direction:'row';
    width: 100%;
`;

export const LegendInnerWrap = styled.div`
    color:'#01FFA5';
    font-size:'15px';
    display:'flex';
    flex-direction:'row';
    width: 100%;
`;



export const LegendItems = styled.div`
    color: ${(Props) => Props.color || '#1FE5C'};
    font-size:'15px';
    display:'flex';
    flex-direction:'row';
    margin-left: 1em;
    z-index: 1;
    &::before {
        content: '';
        background-color: ${(Props) => Props.color || '#1FE5C' };
        height: 3px;
        position: relative;
        display: inline-block;
        vertical-align: middle;
        width: 9px;
        margin-right: 5px;
        border-radius: 10px;
    }
`;
