import { Bytes } from "@ethersproject/bytes";

//- Decentra Bank
export interface PurchaseStock {
    _amount: any
    _tokenType: any
}

export interface SellStock {
    _amount: any
}
 export interface AddCollateral {
    _collateral: string | any
}

export interface FundWithdrawl {
    _to: any
    _type: any
    _amount: any
}

export interface CalculatePurchase {
    _dollarAmount: any
}

export interface CalculateSale {
    _stockAmount: any
}

//- Decentra Core
export interface NewProposal {
// _target: any
_title: any
_description: any
_callData: any
}

export interface Quorum {
    _quorum: any
}

//- Decentra Score
export interface StakeMember{
    _stakeAmount: any
}

export interface Vote {
    _proposalID: any,
    _support: boolean
}



export type Maybe<T> = T | undefined | null;
