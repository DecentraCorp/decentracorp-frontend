import { ResponsiveContainer,LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import  data  from './data';
import React from 'react';
import {
  Background,
  LegendInnerWrap,
  LegendItems,
  LegendWrapper,
  Wrapper,
} from './Style';
export default function Chart(){ 
    
     return(
      <Wrapper>
        <ResponsiveContainer>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray='.2' />
              <XAxis tick={false} dataKey='none' />
              <YAxis tickCount={7} />
              <Tooltip />
              <Line type='monotone' dot={false} dataKey='DCS' stroke='#1fe5c1' strokeWidth={3} />
              <Line type='monotone' dot={false} dataKey='DAI' stroke='#01ffa5' strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
        <Background>
          <LegendWrapper>
            Amount of USD each DecentraStock token holds
          <LegendInnerWrap>
            <LegendItems color={'#1FE5C1'}>DCS &nbsp; </LegendItems>
            <LegendItems color={'#01ffa5'}>DAI</LegendItems>
          </LegendInnerWrap>
          </LegendWrapper>
        </Background>
      </Wrapper>
  )
}
