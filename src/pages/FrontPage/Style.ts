import styled from 'styled-components';

interface StyleProps {
  full?: boolean;
  top?: boolean;
  left?: boolean;
  inner?: boolean;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopRow = styled.section`
  display: flex;
  flex-direction: row;
  margin-top: 2em;
  margin-left: 3em;
  margin-bottom: 3em;
`;

export const Title = styled.h2`
  font-family: spartan;
  font-size: 32px;
  line-height: 43px;
  font-weight: 700;
`;

export const TextBox = styled.div<StyleProps>`
  width: ${(props) => props.top || props.left ? '49%' : ''};
  margin-left: 3em;
  text-align: left;
  display: ${(props) => props.top ? '' : 'flex'};
  flex-direction: row;
  height: 100%;
`;

export const InLineImageTextBox = styled.div<StyleProps>`
  display: flex;
  flex-direction: row;
  width: ${(props) => !props.left ? '60%' : ''};
  margin-right: ${(props) => props.left ? 'auto' : '6em'};
  margin-left: ${(props) => props.left ? '6em' : 'auto'};
  text-align: left;
  align-items: center;
`;

export const Text = styled.p`
  font-family: spartan;
  size: 24px;
  line-height: 38px;
  font-weight: 500;
`;

export const LogoWrap = styled.div`
  width: 50%;
  height: 90%;
`;

export const RightBox = styled.div`
  width: 51%;
  height: 50%;
  display: flex;
  justify-content: center;
  background-image: url(gradient-green.png);
`;

export const Gradient = styled.svg`
  position: absolute;
  z-index: -1;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  margin-bottom: 3em;
`;

export const Logo = styled.img<StyleProps>`
  height: 14em;
  width: 14em;
  margin-bottom: 10em;
  margin-left: ${(props) => props.inner ? '3em' : ''};
  margin-right: ${(props) => props.inner ? '3em' : ''}
`;

export const InlineImg = styled.img<StyleProps>`
  margin-right: 3em;
`;

export const FullWidthBox = styled.div<StyleProps>`
  width: ${(props) => (props.full ? '100vw' : '90%')};
  height: 200px;
  background-color: ${(props) => (props.full ? '#636d6c' : '')};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3em;
`;

export const LeftFullWidth = styled.div`
  width: 60%;
  height: 200px;
`;

export const RightFullWidth = styled.div``;

export const RightAlignedContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  justify-content: flex-end;
`;

export const Headings = styled.h4`
  color: #00ffa5;
  font-family: Spartan;
  font-weight: 700;
  font-size: 32px;
`;

export const LI = styled.li`
  color: #00ffa5;
`;

export const Span = styled.span`
  font-family: spartan;
  size: 24px;
  line-height: 38px;
  font-weight: 500;
  color: white;
`;

export const LeftAlignedContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;

export const GHLogo = styled.img`
  width: 2em;
  height: 2em;
  margin-right: 0.5em;
`;

export const RepoBtn = styled.button`
  background-color: #01ffa5;
    border-radius: 6px;
    width: 144px;
    height: 61px;
    font-family: Spartan;
    font-weight: 600;
    /* font-size: 25px; */
    line-height: 20.16px;
    color: #2b3030;
    border: none;
    margin-right: 2em;
    cursor: pointer;
`;

export const BtnText = styled.span`
  font-family: Spartan;
  font-weight: 600;
  font-size: 25px;
`;
