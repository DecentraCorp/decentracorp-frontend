import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { ethers } from 'ethers';


export function useMintDD(){

    const context = useWeb3React<Web3Provider>();
	const { account, active } = useWeb3React();

    const mintDD = async () => {
    const Web3 = require("web3");

    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8000"));
   
    let encodedProposalDataMint = await web3.eth.abi.encodeFunctionCall(
        {
            "inputs": [
              {
                "internalType": "address",
                "name": "_to",
                "type": "address"
              },
              {
                "internalType": "uint256",
                "name": "_amount",
                "type": "uint256"
              }
            ],
            "name": "proxyMintDD",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          },
        [account]
      );
      return encodedProposalDataMint
    }
    return {mintDD}
}