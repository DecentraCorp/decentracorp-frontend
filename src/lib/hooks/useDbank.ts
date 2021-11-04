// - Contract Imports 
import { useDContracts } from "../contracts/contracts";

// - Web3 Imports 
import { ethers } from "ethers";

// - Type Imports 
import { PurchaseStock, SellStock, AddCollateral, FundWithdrawl, Maybe } from "../utils/types";


export function UseDbank () {

    // Contracts
    const Dbank = useDContracts()?.DBank

    const _purchaseStock = async (
		params: PurchaseStock,
	) => {
		console.log(params._amount, params._tokenType, 'line 19 useDbank Hook')

		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await Dbank!.purchaseStock(
				ethers.BigNumber.from(params._amount),
				params._tokenType,
				{value: ethers.BigNumber.from(params._amount)}
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

    const _sellStock = async (
		params: SellStock,
	): Promise<ethers.ContractTransaction> => {
		console.log(params._amount, 'line 42 useDbank Hook')

		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await Dbank!.sellStock(
				ethers.BigNumber.from(params._amount),
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

	

    const _addNewCollateralType = async (
		_collateral: any,
	): Promise<ethers.ContractTransaction> => {

		let tx: Maybe<ethers.ContractTransaction>;

		try {
			tx = await Dbank!.addNewCollateralType(
				_collateral,
				
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

    const _fundWithdrawl = async (
		params: FundWithdrawl,
	): Promise<ethers.ContractTransaction> => {

		let tx: Maybe<ethers.ContractTransaction>;
		try {
			tx = await Dbank!.fundWithdrawl(
				params._to,
				params._type,
                params._amount
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



    const _calculatePoolBal = () => {
        if(Dbank?.isJust()){
            Dbank?.value.DecentraBank.calculatePoolBal() }
    }

  
    const _calculatePurchase =  (_dollarAmount: any) => {
        console.log(_dollarAmount, 'line 85')
        if(Dbank?.isJust()){
            Dbank?.calculatePurchase(
                ethers.BigNumber.from(_dollarAmount)
            ).then(async (txr: any) => {
                    let _tx = await txr.wait(1);
                    console.log(_tx, 'Success')
                }).catch((err: any) => {
                    let _er = err
                    console.log(_er, 'Failed')
                })
        }
    }


    const _calculateSale = (_stockAmount: any) => {
        
            Dbank?.value.DecentraBank.calculateSale(
                _stockAmount
            ).then(async (txr: any) => {
                    let _tx = await txr.wait(1);
                    console.log(_tx, 'Success')
                }).catch((err: any) => {
                    let _er = err
                    console.log(_er, 'Failed to withdraw')
                })
        

    }  
    
    
    return {_purchaseStock, _sellStock, _addNewCollateralType, _fundWithdrawl, _calculatePoolBal, _calculatePurchase, _calculateSale}
}

 