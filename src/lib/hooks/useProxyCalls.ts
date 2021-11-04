import { ethers } from "ethers";


export function UseProxyCalls() {
    const Web3 = require("web3");

    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8000"));



    const proxyMintDD = async (proxyMintAmount: any, ethAddress: any) => {
        let val = ethers.utils.parseEther(proxyMintAmount)
        let encodedProposalDataMintDD;
        encodedProposalDataMintDD = await web3.eth.abi.encodeFunctionCall(
          {
            name: "proxyMintDD",
            type: "function",
            inputs: [
              {
                type: "address",
                name: "_to",
              },
              {
                type: "uint256",
                name: "_amount",
              },
            ],
          },
          [ethAddress, val]
        );
        return encodedProposalDataMintDD
          }

          return {proxyMintDD}
}