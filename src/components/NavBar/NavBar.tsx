import React from 'react';
import { NavLink } from 'react-router-dom';
import { Wallet } from '../Wallet/Wallet';
import Logo from '../../assets/DBlogo.svg';
import { Nav, WalletBtn, Wrapper, LogoWrapper, Title } from './Style';

export function NavBar() {
  return (
    <Wrapper>
      <NavLink to="/">
        <LogoWrapper src={Logo} alt="DB Logo" />
      </NavLink>
      <Title>DecentraCorp</Title>
      <NavLink to="/bank">
        <Nav>DecentraBank</Nav>
      </NavLink>
      <NavLink to="/membership">
        <Nav>Membership</Nav>
      </NavLink>
      <NavLink to="/dao">
        <Nav>DecentraCorp DAO</Nav>
      </NavLink>
      <Wallet />
    </Wrapper>
  );
}
