import React, {useState} from 'react';
import SwapLogo from '../../assets/switchLogo.svg';
import SwitchSelector from 'react-switch-selector';
import tokens from './tokens';
import { ERC20 } from 'types/ERC20'
import { UseDbank } from '../../lib/hooks/useDbank'
import { useDContracts } from 'lib/contracts/contracts'
import {
    DropdownContainer,
    SwitchContainer,
    Wrapper,
    P,
    CenterImage,
    AltP,
    SwapBtn,
    DropdownBox,
    Input,
    Span,
    Image,
} from './Style';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
import { ethers } from 'ethers';

const switchOptions = [
    {
        label: 'SWAP',
        value: 'swap',
        selectedBackgroundColor: '#01FFA5',
    },
    {
        label: 'LIQUIDITY',
        value: 'liquidity',
        selectedBackgroundColor: '#01FFA5',
    }
]


export const SwapForm = () => {
    const [AmountToSell, setAmountToSell] = React.useState("")
  const [balanceD, setBalanceD] = React.useState<number | undefined | any>()
  const [balanceS, setBalanceS] = React.useState<number | undefined | any>()
  const [calculatedPrice, setcalculatedPrice] = React.useState<any>()

  const context = useWeb3React<Web3Provider>();
	const { account, active } = useWeb3React();

  // contracts
  const dBank = UseDbank();
  const contracts = useDContracts()!;
  const Dstock: ERC20 = contracts.DStock;
  const Ddollar: ERC20 = contracts.DDollar;

    const [fromValue, setFromValue] = useState<string>();
    const [toValue, setToValue] = useState<string>()
    const [currentFromCurrency, setCurrentFromCurrency] = useState<any>();
    const [currentToCurrency, setCurrentToCurrency] = useState<any>();
    const [selectedFunction, setSelectedFunction] = useState<string>();

    const options = [
        {value: tokens[0].tkr, label: <Span><Image src={tokens[0].image} alt=''/> {tokens[0].name} </Span>},
        {value: tokens[1].tkr, label: <Span><Image src={tokens[1].image} alt=''/> {tokens[1].name} </Span>},
    ];
    

    const handleSwap = async () => {
        if(!active){
          alert('please connect your wallet')
        }else{
         let tx = await dBank._purchaseStock({
          _amount: ethers.utils.parseUnits(AmountToSell, 'ether'),
          _tokenType: '0x0000000000000000000000000000000000000000'
                
            });
    
        return tx
      }
      } 

      const handleSell = async () => {
        if(!active){
          alert('please connect your wallet')
        }else{
        const tx = await dBank._sellStock({
          _amount: ethers.utils.parseUnits(AmountToSell)
        })
    
        return tx
      }
      }

    const initialSelectedIndex = switchOptions.findIndex(({value}: any) => value === 'swap')

    const handleSwitchChange = (newValue: any) => {
        setSelectedFunction(newValue)
    }

    const handleFromChange = (e: React.FormEvent<HTMLInputElement>) => {
        setAmountToSell(e.currentTarget.value);
    }

    const handleToChange = (e: React.FormEvent<HTMLInputElement>) => {
        setToValue(e.currentTarget.value);
    }
    return (
        <Wrapper>
            <SwitchContainer>
            <SwitchSelector
                onChange={handleSwitchChange}
                options={switchOptions}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={'#353B3B'}
                fontColor={'white'}
                selectedFontColor={'black'}
                fontSize={18}
            />
            </SwitchContainer>
            <DropdownContainer>
            <P>Swap From:</P>
                <DropdownBox>
                    <DropdownMenu setCurrent={setCurrentFromCurrency} options={options} />
                    <Input placeholder='Value' onChange={(e: React.FormEvent<HTMLInputElement>) => handleFromChange(e)} />
                </DropdownBox>
                <CenterImage src={SwapLogo} alt=''/> {/* Will need click handler here */}
                <P>Swap to:</P>
                <DropdownBox>
                    <DropdownMenu setCurrent={setCurrentToCurrency} options={options} />
                    <Input placeholder='Value' onChange={(e: React.FormEvent<HTMLInputElement>) => handleToChange(e)} />
                </DropdownBox>
                <AltP>1 DCS = X DAI</AltP>
                <SwapBtn onClick={handleSwap}>Swap</SwapBtn>
            </DropdownContainer>
        </Wrapper>
    )
}