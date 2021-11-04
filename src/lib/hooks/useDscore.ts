import { ethers } from "ethers";
import { useDContracts } from "../contracts/contracts";
import { Maybe, StakeMember } from "../utils/types";

export function UseDscore () {

    const contracts = useDContracts();

    const _stakeMember = async (
		params: StakeMember,
	) => {
		console.log( params._stakeAmount, 'line 12 useDscoreHook')
		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await contracts!.Dscore.stakeMembership(
				ethers.BigNumber.from(params._stakeAmount))	
		} catch (e: any) {
			console.error(e);
			if (e.code === 4001) {
				throw Error(`Transaction rejected by your wallet`);
			}
			throw Error(`Failed to submit transaction.`);
		}

		return tx;
	};



    return {_stakeMember}
}

