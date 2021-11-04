import React, { useState } from 'react'
import { converttextstyle,switchLogostyle,CircleButtonstyle,Inputstyle,InputBoxstyle,togglestyleLiq, togglestyleSwap, buttonstyle, tinytextstyle, toggleHelperstyleActive, toggleHelperstyleInactive} from '../../styles'
// import {DropDownTo,DropDownFrom} from './dex/dropdown'
import switchlogo from '../../assets/switchLogo.svg'
import { UseDbank } from '../../lib/hooks/useDbank'
import { Maybe } from '../../lib/utils/types'
import { ethers } from 'ethers'
import { useDContracts } from 'lib/contracts/contracts'
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';
import { ERC20 } from 'types/ERC20'





const ToggleSwitch = () => {
  // state
  const [toggle, setToggle] = useState(false)
  const [AmountToSell, setAmountToSell] = React.useState("")
  const [balanceD, setBalanceD] = React.useState<number | undefined | any>()
  const [balanceS, setBalanceS] = React.useState<number | undefined | any>()
  const [calculatedPrice, setcalculatedPrice] = React.useState<any>()

  const context = useWeb3React<Web3Provider>();
	const { account, active } = useWeb3React();

  // contracts
  const dBank = UseDbank();
  const contracts = useDContracts()!;
  const Dstock: ERC20 = contracts.DStock;
  const Ddollar: ERC20 = contracts.DDollar;


  const handleChange = (e: any) => {
    setAmountToSell(e.target.value)
  }

  const handleSwap = async () => {
    if(!active){
      alert('please connect your wallet')
    }else{
     let tx = await dBank._purchaseStock({
      _amount: ethers.utils.parseUnits(AmountToSell, 'ether'),
      _tokenType: '0x0000000000000000000000000000000000000000'
			
		});

    return tx
  }
  }

  const handleSell = async () => {
    if(!active){
      alert('please connect your wallet')
    }else{
    const tx = await dBank._sellStock({
      _amount: ethers.utils.parseUnits(AmountToSell)
    })

    return tx
  }
  }

  // Calculating input to Dstock
  // React.useEffect(() => {

  //   const handleDebounce = () => {

  //    const dstock = dBank._calculateSale({_stockAmount: AmountToSell})
  //    setcalculatedPrice(dstock)
  
  //   }
  //   handleDebounce();
    
  // },[dBank])


  // get token balance Dstock && Ddollar

  //- Dstock
  React.useEffect(() => {
		if (!account) {
			return;
		}
		const fetchTokenBalance = async () => {
			const balance = await Dstock?.balanceOf(account);
			setBalanceS(ethers.utils.formatEther(balance));
		};
		fetchTokenBalance();
	}, [Dstock, account]);


//- Ddollar
  React.useEffect(() => {
		if (!account) {
			return;
		}
		const fetchTokenBalance = async () => {
			const balance = await Ddollar?.balanceOf(account);
			setBalanceD(ethers.utils.formatEther(balance));
		};
		fetchTokenBalance();
	}, [Ddollar, account]);


  

  return(
    <>
    <div>
    
    </div>
     {!toggle && (
          <>
          <div>Your Balance: {Number(balanceS).toLocaleString()} DStock</div>
          <div>Your Balance: {Number(balanceD).toLocaleString()} DDollar</div>
        <div style={togglestyleSwap}onClick={() => setToggle(!toggle)}>
        <div style ={toggleHelperstyleActive as React.CSSProperties}>
           Swap
           </div>    <div style={toggleHelperstyleInactive as React.CSSProperties}>
           Liquidity
           
        </div>
        </div>
        <div><p style={tinytextstyle}>Swap From:</p>
        <div>
            
        <div>


<form>

  <label>
    <div style={InputBoxstyle as React.CSSProperties}>
   
      <input style={Inputstyle as React.CSSProperties} value={AmountToSell} onChange={handleChange} >
      </input>
    </div>
  </label>

  <button style={CircleButtonstyle as React.CSSProperties}>
     <img style ={switchLogostyle as React.CSSProperties}src={switchlogo} alt="arrows"/>
     </button>

</form>


<div><p style={tinytextstyle}>Swap To:</p></div>
<div style={InputBoxstyle as React.CSSProperties}>

      <input style={Inputstyle as React.CSSProperties} value={calculatedPrice} >
      
      </input>

</div>
<div style = {converttextstyle as React.CSSProperties}>
   <p>1 DCS = X dai</p>
 </div>
</div>
        </div>
        </div>
            <button style={buttonstyle as React.CSSProperties} onClick={handleSwap}>
              Swap
           </button>
      </>
      )}
      {toggle && (
          <>
          <div>Your Balance: {Number(balanceS).toLocaleString()} DStock</div>
          <div>Your Balance: {Number(balanceD).toLocaleString()} DDollar</div>
 <div style={togglestyleLiq}onClick={() => setToggle(!toggle)}>
 <div style ={toggleHelperstyleInactive as React.CSSProperties}>
           Swap
           </div><div style={toggleHelperstyleActive as React.CSSProperties}>
           Liquidity
           
        </div>
 </div>
 <div><p style={tinytextstyle}>Swap From:</p>
        <div>
        <div>
            
            <div>
    
    <form>
    
      <label>
        <div style={InputBoxstyle as React.CSSProperties}>
       
          <input style={Inputstyle as React.CSSProperties} value={AmountToSell} onChange={handleChange} >
          
          </input>
        </div>
      </label>
      <button style={CircleButtonstyle as React.CSSProperties}>
         <img style ={switchLogostyle as React.CSSProperties}src={switchlogo} alt="arrows"/>
         </button>
    </form>
    <div><p style={tinytextstyle}>Swap To:</p></div>
    <div style={InputBoxstyle as React.CSSProperties}>
  
          <input style={Inputstyle as React.CSSProperties} value={AmountToSell} onChange={handleChange} >
          
          </input>
    
    </div>
    <div style = {converttextstyle as React.CSSProperties}>
       <p>1 DCS = X dai</p>
     </div>
    </div>
            </div>
            </div>  
          
        
        </div>
            
            <button style={buttonstyle as React.CSSProperties} onClick={handleSell}>
              Sell
           </button>
           
      </>
      )}
     
    </>
  )
}
export default ToggleSwitch