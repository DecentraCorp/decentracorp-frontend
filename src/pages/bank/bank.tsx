import React from 'react'
import {SwapForm} from '../../components/Swap/Swap'
import Chart from '../../components/Chart/Chart';
import Topbar from '../homepage/topbar'
import { ethers } from 'ethers'
import { Provider } from '@ethersproject/providers'
import {
    Wrapper,
    ChartBox,
    ToggleBox,
} from './Style';

export default function Bank() {
    return (
        <Wrapper>
            <ChartBox>
                <Chart/> 
            </ChartBox>
            <ToggleBox>
                <SwapForm/>
            </ToggleBox>
        </Wrapper>
    )
}
   