import React from 'react';
import {InfoBox, InfoHeader, InfoSecondary, InfoWrapper, InnerText, RightBorder, RightColumn, TextBox} from './Style'
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { BigNumber, BigNumberish, ethers } from 'ethers';
import { useDContracts } from "../../lib/contracts/contracts";
//interface Props {
//Props Here
//}


// dscore types: 
// level
// jobs
// votes
// reputation
// staked
// verified
// audit

export default function DScoreDisplay(){
    const context = useWeb3React<Web3Provider>();
	const { account, active } = useWeb3React();

    const [dScoreBalance, setdScoreBalance] = React.useState<number | undefined | any>()

    const contracts = useDContracts()
    const Dscore = contracts?.Dscore

    React.useEffect(() => {
		if (!account) {
			return;
		}
		const fetchTokenBalance = async () => {
			const balance: BigNumber | BigNumberish | any = await Dscore?.calculateVotingPower(account);
			setdScoreBalance(ethers.utils.formatUnits(balance));
		};
		fetchTokenBalance();
	}, [Dscore, account]);

    console.log(dScoreBalance, 'line 41')

return (
    <InfoBox>
        <InfoWrapper>
            <InfoHeader>Your D Score</InfoHeader>
            <InfoSecondary>{active? Number(dScoreBalance).toLocaleString() : 'please connect your wallet'}</InfoSecondary>
        </InfoWrapper>
        <RightBorder>
        <RightColumn>
            <InfoHeader smaller>Score Breakdown:</InfoHeader>
            <TextBox>
                <InnerText>Jobs</InnerText>
                <InnerText>12</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Votes</InnerText>
                <InnerText>100</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Rep</InnerText>
                <InnerText>1</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Staked</InnerText>
                <InnerText>11000</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Verified</InnerText>
                <InnerText>1</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Audit</InnerText>
                <InnerText>1</InnerText>
            </TextBox>
        </RightColumn>
        </RightBorder>
    </InfoBox>
    
)
}