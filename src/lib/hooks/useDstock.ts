import { useDContracts } from "../contracts/contracts";

import { Provider, Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';




export function useDstock(){
    //- wallet 
    const context = useWeb3React<Web3Provider>(); 
	const { account, library } = useWeb3React();

    // Contracts
const Dbank = useDContracts()?.DStock

//- get the balance of decentra stock of the user
const _balanceOf = async () => {
    // console.log(params._account,'line 19 useDstock hook')
    if(Dbank?.isJust()){
        Dbank?.balanceOf(await library) }
}

return {_balanceOf}

}

