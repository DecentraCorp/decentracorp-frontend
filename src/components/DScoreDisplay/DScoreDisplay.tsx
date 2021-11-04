import {InfoBox, InfoHeader, InfoSecondary, InfoWrapper, InnerText, RightBorder, RightColumn, TextBox} from './Style'

//interface Props {
//Props Here
//}


// dscore types: 
// level
// jobs
// votes
// reputation
// staked
// verified
// audit

export default function DScoreDisplay(){

return (
    <InfoBox>
        <InfoWrapper>
            <InfoHeader>Your D Score</InfoHeader>
            <InfoSecondary>17</InfoSecondary>
        </InfoWrapper>
        <RightBorder>
        <RightColumn>
            <InfoHeader smaller>Score Breakdown:</InfoHeader>
            <TextBox>
                <InnerText>Jobs</InnerText>
                <InnerText>12</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Votes</InnerText>
                <InnerText>100</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Rep</InnerText>
                <InnerText>1</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Staked</InnerText>
                <InnerText>11000</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Verified</InnerText>
                <InnerText>1</InnerText>
            </TextBox>
            <TextBox>
                <InnerText>Audit</InnerText>
                <InnerText>1</InnerText>
            </TextBox>
        </RightColumn>
        </RightBorder>
    </InfoBox>
    
)
}