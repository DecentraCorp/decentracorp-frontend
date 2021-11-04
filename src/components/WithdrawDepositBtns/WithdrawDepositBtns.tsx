import React from 'react';
import { InfoBox, Button } from './Style'
import { BigNumber, ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { UseDscore } from 'lib/hooks/useDscore';

//interface ActiveProposalsProps {
//Props Here
//}


export default function ActiveProposals(){
    const [stakeAmount, setStakeAmount] = React.useState<any>('')
    const [showStake, setShowStake] = React.useState<boolean>(true)
    const context = useWeb3React<Web3Provider>();
    const { account,active } = useWeb3React();
    const dScore = UseDscore()

    const handleStake = async () => {
        const tx = await dScore._stakeMember({ _stakeAmount: ethers.utils.parseUnits(stakeAmount, 'ether')})
        return tx
       }
    const handleStakeChange = async (e: any) => {
        setStakeAmount(e.target.value)
      }
      const handleShowStake = () => {
          setShowStake(false)

      }
      const handleClose = () => {
          setShowStake(true)
          console.log(showStake, 'line 33')
      }
return (
    <InfoBox>
        <Button>Withdraw</Button>
        
        <Button onClick={showStake ? handleShowStake : handleClose}>	{showStake ? 'Stake' : 'Close' }</Button>
  
        <input hidden={showStake} placeholder='hello'/>

     
    </InfoBox>
)
}