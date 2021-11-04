import React from 'react';
import DCLogo from '../../assets/DCLogo.svg';
import BlockchainD from '../../assets/blockchainD.svg';
import GreenWorldV from '../../assets/GreenWorldV.svg';
import GithubLogo from '../../assets/GithubLogo.svg';
import PaperLockImg from '../../assets/PaperLockImg.svg';
import {
  Wrapper,
  TopRow,
  Title,
  TextBox,
  InLineImageTextBox,
  Text,
  RightBox,
  LogoWrap,
  Gradient,
  FullWidthBox,
  LeftFullWidth,
  RightFullWidth,
  RightAlignedContainer,
  LeftAlignedContainer,
  RepoBtn,
  GHLogo,
  BtnText,
  Logo,
  InlineImg,
  Headings,
  LI,
  Span,
} from './Style';
import { FrntPageDesignPiece } from 'components/FrntPageDesignPiece/FrntPageDesignPiece';


const FrontPage = () => {
  return (
    <div>
      <Wrapper>
        <TopRow>
          <TextBox top>
            <Title>
              The worlds first <br /> decentralized corporation
            </Title>
            <Text>
              DecentraCorp is the world’s first Decentralized Autonomous
              Corporation (DAC) where the <br/> CEO and Shareholders are the
              employees, managers and factory owners.
            </Text>
            <RepoBtn><GHLogo src={GithubLogo} alt=''/><BtnText>Repo</BtnText></RepoBtn>
          </TextBox>
          <RightBox>
            <Gradient>
            <FrntPageDesignPiece/>
            </Gradient>
            <div style={{marginBottom: '8em'}}>
              <Logo src={DCLogo} alt="" />
            </div>
          </RightBox>
        </TopRow>
        <FullWidthBox full>
          <LeftFullWidth>
            <InLineImageTextBox left>
              <InlineImg src={BlockchainD} alt="" />
              <Text>
                Operating under the guiding principles of decentralization and
                individual autonomy, DecentraCorp seeks to radically alter the
                corporate world.
              </Text>
            </InLineImageTextBox>
          </LeftFullWidth>
          <RightFullWidth>
            <InLineImageTextBox>
              <InlineImg src={GreenWorldV} alt="" />
              <Text>
                DecentraCorp aims to empower individuals by providing the tools
                needed for entrepreneurship, self advancement and fulfillment
                while coordinating a global community to build a better world.
              </Text>
            </InLineImageTextBox>
          </RightFullWidth>
        </FullWidthBox>
        <RightAlignedContainer>
        <InlineImg src={PaperLockImg} alt=''/>
          <TextBox style={{display: 'flex', flexDirection: 'column'}}>
            <Headings>DecentraCore{' '}</Headings>
            <Text>
              The DecentraCore contract is the central contract for the
              DecentraCorp contract set. This contract handles DecentraCorp’s
              DAO functionality like proposals and voting as well as maintaining
              a user’s D-Score.
            </Text>
          </TextBox>
        </RightAlignedContainer>
        <LeftAlignedContainer>
          <TextBox style={{display: 'flex', flexDirection: 'column'}}>
            <Headings>
            DecentraBank{' '}
            </Headings>
            <Text>
              The DecentraBank smart-contract is responsible for exchanging
              stable-coins like DAI and DecentraDollar for DecentraStock
              utilizing a dual bonding-curve mechanism. The bonding curve sets
              the price for DecentraStock and helps tether the price of
              DecentraDollar to that of other stable-coins. The fees from
              exchanges are placed directly under the control of DecentraCorp
              and it’s members.
            </Text>
          </TextBox>
          <Logo src={DCLogo} alt='' inner/>
        </LeftAlignedContainer>
        <RightAlignedContainer>
        <Logo src={DCLogo} alt=''inner left/>
          <TextBox style={{display: 'flex', flexDirection: 'column', width: '70%'}}>
            <Headings>
            DecentraStock{' '}
            </Headings>
            <Text>
              DecentraStock is the ERC20 membership token for DecentraCorp. To
              become an active DecentraCorp member, an account must stake at
              least one DecentraStock for activation. Additional DecentraStock
              can be staked as well to increase a users D-Score. While staked
              DecentraStock does play a factor into a users D-Score it is not
              the main factor for determining D-Score.
            </Text>
          </TextBox>
        </RightAlignedContainer>
        <FullWidthBox>
          <TextBox style={{display: 'flex', flexDirection: 'column'}}>
          <Headings>
          D-Scores{' '}
          </Headings>
          <Text>
            Members of DecentraCorp all have a D-Score associated with their
            account. This D-Score is used to determine a users trustworthiness
            within the company. D-score is determined using a combination of
            attributes and determines a members voting power, rank/reputation
            and abilities within DecentraCorp. A user's D-score tells both
            customers and other members how trustworthy a member is.
          </Text>
          <Text>
            The D-score is made up of the following factors:
            <ul>
              <LI>Jobs: <Span>The number of D-jobs completed by the member</Span></LI>
              <LI>Reputation: <Span>The overall average of the rating of each job performed</Span></LI>
              <LI>Stake: <Span>The number of DecentraStock a member has staked</Span></LI>
              <LI>Verified: <Span>The number of times a member has been audited</Span></LI>
              <LI>Audit: <Span>The number of other members this account has audited</Span></LI>
              <LI>Level: <Span>A members level is determined by a DecentraCorp community vote</Span></LI>
            </ul>
          </Text>
          </TextBox>
        </FullWidthBox>
      </Wrapper>
    </div>
  );
};

export default FrontPage;
