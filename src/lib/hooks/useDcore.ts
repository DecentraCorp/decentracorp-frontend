// - Web3 Imports 
import { ethers } from "ethers";
import React from "react";

// - Contract Imports 
import { useDContracts } from "../contracts/contracts";
import { Maybe, NewProposal, Vote } from "../utils/types";

export function UseDcore () {
	const Web3 = require("web3");

    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8000"));

    const contracts = useDContracts();
	console.log(contracts)

    //- Proposal Core Function Calls
	const _newProposal = async (
		_proposalHash: any, _callData: any, amount: any
	) => {
		console.log( 'prop hash:',_proposalHash,'call data:',_callData,amount.toLocaleString(), 'line 19 useDbank Hook')
		
		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await contracts?.DCore.newProposal(
                '0xfb821d4BD0027E80282F6F16E7550F9Ee8D21645',
                _proposalHash,
                _callData,	
				{value: ethers.BigNumber.from(amount.toLocaleString())}			
			); 
		} catch (e: any) {
			console.error(e);
			if (e.code === 4001) {
				throw Error(`Transaction rejected by your wallet`);
			}
			throw Error(`Failed to submit transaction.`);
		}

		return tx;
	};

    // const _newQuorum = async (

	// ) => {
	// 	console.log(params._quorum, 'line 39 useDbank Hook')

	// 	let tx: Maybe<ethers.ContractTransaction>;
	// 	try {
	// 		tx = await contracts!.DCore.setQuorum(
    //            		params._quorum
	// 		);
	// 	} catch (e: any) {
	// 		console.error(e);
	// 		if (e.code === 4001) {
	// 			throw Error(`Transaction rejected by your wallet`);
	// 		}
	// 		throw Error(`Failed to submit transaction.`);
	// 	}

	// 	return tx;
	// };

    // const _vote = async (
	// 	params: Vote,
	// ) => {
	// 	console.log(params._proposalID, 'line 69 useDbank Hook')

	// 	let tx: Maybe<ethers.ContractTransaction>;
	// 	try {
	// 		tx = await contracts!.DCore.vote(
    //            		params._proposalID,  
	// 				params._support
	// 		);
	// 	} catch (e: any) {
	// 		console.error(e);
	// 		if (e.code === 4001) {
	// 			throw Error(`Transaction rejected by your wallet`);
	// 		}
	// 		throw Error(`Failed to submit transaction.`);
	// 	}

	// 	return tx;
	// };

    

    // _newQuorum,_vote
   
  
 return {_newProposal,}
}