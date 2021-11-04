import styled from 'styled-components';

interface StyledProps {
    open?: boolean;
}

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    height: 10%;
    margin-left: auto;
    margin-right: auto;
`;

export const StyledBurger = styled.button<StyledProps>`
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
`;

export const Div = styled.div<StyledProps>`
    width: 2rem;
    height: 0.25rem;
    background: white;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${(Props) => Props.open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
`;

export const StyledMenu = styled.nav<StyledProps>`
    display: flex;
    flex-direction: column;
    /* justify-content: space-around; */
    background: black;
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    width: 70%;
    transform: ${(Props) => Props.open? 'translateX(0)': 'translateX(-100%)'};
`;

export const MenuLink = styled.a`
    font-size: 0.9rem;
    max-width: 90%;
    text-align: left;
    margin-bottom: 1em;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #01ffa5;
    transition: color 0.3s linear;
    &:hover {
        color: white;
    }
`;

export const LogoWrapper = styled.img`
    margin-right: 2em;
`;

export const LogoMenuWrapper = styled.img`
    height: 20%;
    margin-top: 0;
`;

export const WalletBtn = styled.button`
    align-self: center;
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
`;