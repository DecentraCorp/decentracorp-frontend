import { ethers } from "ethers";
import { Hexable } from "ethers/lib/utils";
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));


export const proxyMintDD = async (proxyMintAmount: any, ethAddress: any) => {
    let val = ethers.utils.parseUnits(proxyMintAmount)
    let encodedProposalDataMintDD;
    try{
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
    }catch (err: any){
        console.log(err)
    }
 }
  
  
    export const proxyBurnDD = async (ethAddress: any, amount: any) => {
      let val = ethers.utils.parseUnits(amount)
      let encodedProposalDataBurnDD;
      try{
        encodedProposalDataBurnDD = web3.eth.abi.encodeFunctionCall({
            name: "proxyBurnDD",
            type: "function",
            "inputs": [
              {
               
                "name": "_from",
                "type": "address"
              },
              {
             
                "name": "_amount",
                "type": "uint256"
              }
            ],     
          }, [ethAddress, val]
          )
          return encodedProposalDataBurnDD
      } catch (err: any){
          console.log(err)
      }   
    }
  
    export const proxyMintDS = async (amount: any, ethAddress: any) => {
        let val = ethers.utils.parseUnits(amount)
       let encodedProposalDataMintDS;
       try{
        encodedProposalDataMintDS = await web3.eth.abi.encodeFunctionCall({
            name: "proxyMintDS",
            type: "function",
            "inputs": [
              {
                "name": "_to",
                "type": "address"
              },
              {
                "name": "_amount",
                "type": "uint256"
              }
            ],
          },[ethAddress, val]
           );
           return encodedProposalDataMintDS
       } catch (err: any){
        console.log(err)
       }
       
    }
  
    export const proxyBurnDS = async (amount: any, ethAddress: any) => {
        let val = ethers.utils.parseUnits(amount)
        let encodedProposalDataBurnDS;
        try{
            encodedProposalDataBurnDS = await web3.eth.abi.encodeFunctionCall(  {
                name: "proxyBurnDS",
                type: "function",
                "inputs": [
                  {
               
                    "name": "_from",
                    "type": "address"
                  },
                  {
                   
                    "name": "_amount",
                    "type": "uint256"
                  }
                ],
              }, [ethAddress,val]
              )
              return encodedProposalDataBurnDS
        }catch (err: any){
            console.log(err)
        }   

  
    }
  
    export const proxyAddCollateral = async (tokenAddress: Hexable) => {
      let encodedProposalDataAddCollateral = await web3.eth.abi.encodeFunctionData({
        name: "addNewCollateralType",
        type: "function",
        "inputs": [
          {
            "name": "_collateral",
            "type": "address"
          }
        ], 
      },[tokenAddress]
      )
    }
  
    export const proxywidthdrawFunds = async (ethAddress: string, tokenAddress: Hexable) => {
      let val = ethers.utils.parseUnits('1' ,'ethers')
      let encodedProposalDataWidthdraw = await web3.eth.abi.encodeFunctionCall({
        name: "fundWithdrawl",
        type: "function",
        "inputs": [
          { 
            "name": "_to",
            "type": "address"
          },
          {
            "name": "_type",
            "type": "uint256"
          },
          {
            "name": "_amount",
            "type": "uint256"
          }
        ], 
      },[ethAddress, tokenAddress, val]
      )    
    }