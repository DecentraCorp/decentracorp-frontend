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

    const [balanceS, setBalanceS] = React.useState<number | undefined | any>()
    const context = useWeb3React<Web3Provider>();
	const { account, active } = useWeb3React();
    const contracts = useDContracts()!;
    const Dstock: ERC20 = contracts.DStock;
    React.useEffect(() => {
		if (!account) {
			return;
		}
		const fetchTokenBalance = async () => {
			const balance = await Dstock?.balanceOf(account);
			setBalanceS(ethers.utils.formatEther(balance));
		};
		fetchTokenBalance();
	}, [Dstock, account]);

return (
    <InfoBox>
        <InfoHeader>Your DecentraDollar Balance</InfoHeader>
        <InfoSecondary>{Number(balanceS).toLocaleString()}</InfoSecondary>
    </InfoBox>
)
}