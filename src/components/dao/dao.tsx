import React from 'react'
import { daostyle, stake, createProposal, BOX, createProposalBox, stakeBox, proposalData, proposalBox } from '../../styles'
import { ApolloQueryResult, gql, useLazyQuery, useQuery } from '@apollo/client';
import { PROPOSAL_DATA } from '../../lib/queries/proposalQueries';
import Modal from 'antd/lib/modal/Modal';

import { UseDcore } from '../../lib/hooks/useDcore';
import { UseDscore } from 'lib/hooks/useDscore';
import { BigNumber, ethers } from 'ethers';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

import { useMintDD } from 'lib/proposalTypes/proposalMintDD';
import { useIpfsSummary } from 'lib/hooks/useIpfsSummary';

import { Table, Tag, Space } from 'antd';
import SimpleOptionDropdown from 'components/Dropdowns/SimpleOptionDropdown/SimpleOptionDropdown';
import PropInput from './propTypes';
import { UseProxyCalls } from 'lib/hooks/useProxyCalls';



export default function Dao() {


  
  const { loading, error, data } = useQuery(PROPOSAL_DATA);   
   console.log(data, 'proposal data')
   console.log(loading, 'line 10 dao')

   const context = useWeb3React<Web3Provider>();
   const { account,active } = useWeb3React();

  //- Hooks
  const _ipfs = useIpfsSummary()
  const dCore = UseDcore()
  const dScore = UseDscore()
  const pTypeMintDD = useMintDD();
  const proxy = UseProxyCalls()

  const Web3 = require("web3");

    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));

  const [stakeAmount, setStakeAmount] = React.useState<any>('')
  const [propType, setPropType] = React.useState<any>('')
  const [title, setTitle] = React.useState<string>('')
  const [description, setDescription] = React.useState<any>('')
  const [_Data, setData] = React.useState<any>('')
  const [proxyMintAmount, setProxyMintAmount] = React.useState<string >('')
  const [ethAddress, setEthAddress] = React.useState<string>('')
  const [tokenAddress, setTokenAddress] = React.useState('')
  const [_callData, setCallData] = React.useState<any>()


   ///////////////
 // Web3 Functions //
	///////////////
    const proxyAddCollateral = async () => {
      let encodedProposalDataAddCollateral = await web3.eth.abi.encodeFunctionData(
        {
        name: "addNewCollateralType",
        type: "function",
        "inputs": [
          {
            "name": "_collateral",
            "type": "address"
          }
        ], 
      },
      [proxyMintAmount]
      );
      return encodedProposalDataAddCollateral
    }

    console.log(proxyMintAmount, 'line 96')

  const proxyBurnDD = async () => {
    let encodedProposalDataBurnDD = web3.eth.abi.encodeFunctionCall({
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
    }, [ethAddress, proxyMintAmount]
    )
    }

  const proxyMintDS = async () => {
    let encodedProposalDataMintDS = await web3.eth.abi.encodeFunctionCall({
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
    },[ethAddress, proxyMintAmount]
     );
  }

  const proxyBurnDS = async () => {
    let encodedProposalDataBurnDS = await web3.eth.abi.encodeFunctionCall(  {
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
    }, [ethAddress,proxyMintAmount]
    )
  }

  const proxywithdrawFunds = async () => {
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


  const proxyMintDD = async () => {
    let val = ethers.utils.parseUnits(proxyMintAmount)
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

  const handleCreate = async (_calldata: any) => {
    if(!active){
      alert('please connect your wallet')
    } else
   await _ipfs.ipfsSummary(
       title,description,propType, await proxyMintDD(), ethers.BigNumber.from(proxyMintAmount)
   )
  }

  const handleStake = async () => {
   const tx = await dScore._stakeMember({ _stakeAmount: ethers.utils.parseUnits(stakeAmount, 'ether')})
   return tx
  }

  const handleStakeChange = async (e: any) => {
    setStakeAmount(e.target.value)
  }
 

  const handleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const handleI = (e: any) => {
    setEthAddress(e.target.value)
  }
  const handleA = (e: any) => {
    setProxyMintAmount(e.target.value)
  }

  const handleT = (e: any) => {
    setTokenAddress(e.target.value)
  }

  const handleDescriptionChange = (e: any) => {
    setDescription(e.target.value)
  }




    return (
        <>
     
    
        <div style={BOX as React.CSSProperties}>
          
            <div style={createProposal as React.CSSProperties}>
            {/* <SimpleOptionDropdown
            customHeaderText={'Select a proposal type'}
		  	        style={{ width: 100 }}
		  	        options={[]}
		  	        onSelect={(option: string) => setPropType(option)}
			          label={'Type of Proposal'}
		        /> */}
                <div style={createProposalBox as React.CSSProperties} >
                    <input placeholder='Proposal Title' onChange={handleChange}  />
                    <textarea placeholder='Proposal Description' onChange={handleDescriptionChange}  />
                    <input placeholder='address' onChange={handleI} />
                    <input placeholder='amount' onChange={handleA} />
                    <button onClick={handleCreate}>Create Proposal</button>
                </div>
                <PropInput
					      onSubmit={handleA}
				      	style={{ marginTop: 8 }}
				/>

            <input placeholder='Stake Amount' onChange={handleStakeChange} />
            <button onClick={handleStake} >Stake membership</button>
            </div>

     
           
     
       

           
           
          
        </div>
     
        </>
    )
}

 