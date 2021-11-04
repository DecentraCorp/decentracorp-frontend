import React from 'react';
import {Wrapper, InfoDisplayWrapper, TransactionHistory, WhiteDisplay, Link} from './Style';
import DecentraDollarBalance from '../../components/DecentraDollarBalance/DecentraDollarBalance';
import DecentraStockBalance from '../../components/DecentraStockBalance/DecentraStockBalance';
import WithdrawDepositBtns from '../../components/WithdrawDepositBtns/WithdrawDepositBtns';
import TransactionDisplay from '../../components/TransactionDisplay/TransactionDisplay';
import DScoreDisplay from 'components/DScoreDisplay/DScoreDisplay';

export default function Dao() {

    return (
        <Wrapper>
            <WhiteDisplay>IDX integration with <Link href='https://ceramic.network/' >Ceramic</Link> coming soon!</WhiteDisplay>
            <InfoDisplayWrapper>
                <DecentraDollarBalance />
                <DecentraStockBalance />
                <DScoreDisplay />
                <WithdrawDepositBtns />
            </InfoDisplayWrapper>
            <TransactionHistory>
                <TransactionDisplay />
            </TransactionHistory>
        </Wrapper>
    )
}