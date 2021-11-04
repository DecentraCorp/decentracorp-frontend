// - Contract Imports 
import { useDContracts } from "../contracts/contracts";

// - Web3 Imports 
import { ethers } from "ethers";
import { Bytes } from "@ethersproject/bytes";


// - Type Imports 
import { Maybe, GetProposal, Vote, NewProposal } from '../utils/types';


export function UseDcore () {

    const DCore = useDContracts()?.DCore

    const _getProposal = async (
        params: GetProposal,
        _id: any
        ): Promise<ethers.ContractTransaction> => {
        let tx: any;
        try {
            tx = await DCore!.getProposal(params._id);
        } catch (err: any) {
            if (err.code === 4001) {
                throw Error('Transaction rejected by your wallet');
            } else {
                throw Error('Failed to submit transaction.')
            }
        }
        return tx;
    }

    const _vote = async (
        params: Vote,
        _proposalID: any, 
        _supportsProposal: boolean
        ): Promise<ethers.ContractTransaction> => {
         let tx: Maybe<ethers.ContractTransaction>;
         try {
             tx = await DCore!.vote(
                 params._proposalId,
                 params._supportsProposal
             )
         } catch (err: any) {
            if (err.code === 4001) {
                throw Error('Transaction rejected by your wallet');
            } else {
                throw Error('Failed to submit transaction.');
            }
         }
         return tx;
    }

    const _newProposal = async(
        params: NewProposal,
        _target: string, 
        _proposalHash: string, 
        _calldata: Bytes
        ): Promise<ethers.ContractTransaction> => {
        let tx: Maybe<ethers.ContractTransaction>;
          try {
              tx = await DCore!.newProposal(
                  params._target,
                  params._proposalHash,
                  params._callData,
              )
          } catch (e: any) {
			console.error(e);
			if (e.code === 4001) {
				throw Error(`Transaction rejected by your wallet`);
			} else {
			throw Error(`Failed to submit transaction.`);
            }
        }
        return tx;
    }

    /**
     * proxyMintDD params
     */

    /**
     * proxyBurnDD
     */




    return { _newProposal, _vote, _getProposal }
}