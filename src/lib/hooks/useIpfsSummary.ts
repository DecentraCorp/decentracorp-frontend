import { time } from "console";
import moment from "moment";
import React from "react";
import { UseDcore } from "./useDcore";
import { create, urlSource } from 'ipfs-http-client'


export function UseIpfsSummary(){
    const dCore = UseDcore()
    	//- IPFS 
	//- pass the state of title and desription to the dao page and pass it back into the useDcore hook 
	//- pass the proposalHash into the function call all via the ipfs summary 
	//-call data and proposal hash will be passed through the ipfs summart to then be passed to the proposal contract call


   

	  const ipfsSummary = async (title: any, description: any, proposalType: any, _callData: any, amount: any) => {
        console.log(_callData, 'line 23 ipfs')
		console.log("submit");
		const ipfsLib = require('ipfs-api');
		const ipfsClient = new ipfsLib({host: "ipfs.infura.io", port: 5001, protocol: "https"})
	
		const ipfsRoot = `https://ipfs.io/ipfs/`

		const metadataObject = {
			title: title,
			description: description,
            ProposalType: proposalType,
            TimeCreated: moment().format('MMMM Do YYYY, h:mm:ss a')
		  }
		//   const metadataJson = JSON.stringify(metadataObject);
		// let res = await ipfsClient.add(Buffer.from(metadataJson))
		// const metadataPath = `${res[0].hash}`;
    	// console.log(`proposalHash is at ${metadataPath}`);
		// await ipfsClient.add(Buffer.from(metadataJson));
		 dCore._newProposal('', _callData, amount);
	  }
    
      return {ipfsSummary}
}