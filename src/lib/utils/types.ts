import { Bytes } from "@ethersproject/bytes";

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

export interface NewProposal {
    _target: string;
    _proposalHash: string;
    _callData: Bytes;
}

export interface GetProposal {
    _id: number;
}

export interface Vote {
    _proposalId: number;
    _supportsProposal: boolean;
}

export interface StakeMembership {
    _stakeAmount: any;
}

export interface IncreaseScore {
    _member: any;
    _factor: any;
    _amount: any;
}

export interface CalculateVotingPower {
    _member: string;
}

export interface StakeCheck {
    _member: string;
}

export interface GetDScore {
    _member: string;
}

export type Maybe<T> = T | undefined | null;