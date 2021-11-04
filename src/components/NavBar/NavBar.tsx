import React from 'react';
import { NavLink } from 'react-router-dom';
import  Wallet  from '../userWallet/wallet'
import Logo from '../../assets/DBlogo.svg';
import { Nav, WalletBtn, Wrapper, LogoWrapper, Title, CloseBtn } from './Style';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/react"
import './chakra.styles.css'
import { truncate } from 'lodash';

export function NavBar() {
  const context = useWeb3React<Web3Provider>();
	const { account, active } = useWeb3React();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const styles = {
    width: 20
  }
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
      {/* <Wallet /> */}
			{account ? <div id="account">{truncate(account)}</div> : null}
			<WalletBtn onClick={onOpen}>
				{active ? 'Connected' : 'Connect Wallet'}
			</WalletBtn>
      <Modal size={'sm'} styleConfig={styles}  isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
          <ModalBody>
            	<Wallet />
          </ModalBody>

          <ModalFooter>
            <CloseBtn onClick={onClose}>
              Close
            </CloseBtn>
          </ModalFooter>
        </ModalContent>  
        </Modal>
    </Wrapper>
  );
}
