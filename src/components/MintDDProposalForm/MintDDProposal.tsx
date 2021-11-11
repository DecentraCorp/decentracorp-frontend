import { useState } from 'react'
import {Wrapper, Input, P, SubmitBtn} from './Style'
import {ethers} from 'ethers';
import { useForm, SubmitHandler} from 'react-hook-form';

import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core'
import { UseIpfsSummary } from 'lib/hooks/UseIpfsSummary';;
//interface MintDDProposalProps {
//Props Here
//}

type Inputs = {
    address: string;
    amount: string;
};

export default function MintDDProposal(){
    // const { register, handleSubmit, formState: { errors },} = useForm<Inputs>();
    const [address, setAddress] = useState<string>();
    const [amount, setAmount] = useState<any>();
    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<any>('')
    const [proxyMintAmount, setProxyMintAmount] = useState<string >('')

    const Web3 = require("web3");

    const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:3000"));
    const context = useWeb3React<Web3Provider>();
   const { account,active } = useWeb3React();

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
      [address, val]
    );
    return encodedProposalDataMintDD
      }
      const _ipfs = UseIpfsSummary();
    const handleCreate = async (_calldata: any) => {
   
        if(!active){
          alert('please connect your wallet')
        } else
       await _ipfs.ipfsSummary(
           title,description,'mint', await proxyMintDD(), ethers.BigNumber.from(proxyMintAmount)
       )
      }

    const onSubmit = (data: any) => {
        console.log('Submit')
        console.log(data)
        // setAddress(data.address);
        // setAmount(ethers.utils.parseEther(data.amount))
        console.log(address);
        console.log(amount); 
    }

return (
    <Wrapper>
        <form onSubmit={(onSubmit)}>
        <P>Where would you like the DecentraDollars minted to?</P>
        <Input
            type='text'
            // {...register('address', {required: true})}
            placeholder={'address'}
        />
        <P>How many DecentraDollars would you like minted?</P>
        <Input
            type='text'
            // {...register('amount', {required: true})}
            placeholder={'amount'}
        />
        <SubmitBtn type='submit' value='Submit' />
        </form>
    </Wrapper>
)
}