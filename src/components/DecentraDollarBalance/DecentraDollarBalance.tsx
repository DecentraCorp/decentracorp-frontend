import React from 'react';
import { InfoBox, InfoHeader, InfoSecondary} from './Style'
import { ERC20 } from 'types/ERC20'
import { useDContracts } from 'lib/contracts/contracts'
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';

//interface ActiveProposalsProps {
//Props Here
//}


export default function ActiveProposals(){
    const [balanceD, setBalanceD] = React.useState<number | undefined | any>()
    const contracts = useDContracts()!;
    const Ddollar: ERC20 = contracts.DDollar;
    const context = useWeb3React<Web3Provider>();
	const { account, active } = useWeb3React();

    React.useEffect(() => {
		if (!account) {
			return;
		}
		const fetchTokenBalance = async () => {
			const balance = await Ddollar?.balanceOf(account);
			setBalanceD(ethers.utils.formatEther(balance));
		};
		fetchTokenBalance();
	}, [Ddollar, account]);

return (
    <InfoBox>
        <InfoHeader>Your DecentraDollar Balance</InfoHeader>
        <InfoSecondary>{Number(balanceD).toLocaleString()}</InfoSecondary>
    </InfoBox>
)
}