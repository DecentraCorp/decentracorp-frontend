import active from '../../assets/ActiveClock.svg';
import {
    WhiteDisplay,
    ProposalRow,
    LeftProposalRow,
    StatusBox,
    ProposalDetails,
    IndicatorImage,
    Indicator,
    ProposalTitle,
} from './Style'

//interface ProposalsListProps {
//Props Here
//}


export default function ProposalsList(){

return (
    <>
    <WhiteDisplay>Proposals</WhiteDisplay>
                <ProposalRow>
                    <LeftProposalRow>
                        <ProposalTitle>Proposal 1</ProposalTitle>
                        <StatusBox active>ACTIVE</StatusBox>
                    </LeftProposalRow>
                        <ProposalDetails>#01 Executed November 12th, 2021</ProposalDetails>
                        <IndicatorImage src={active} />
                    <Indicator>ACTIVE</Indicator>
                </ProposalRow>
                <ProposalRow>
                    <LeftProposalRow>
                    <ProposalTitle>Proposal 2</ProposalTitle>
                        <StatusBox passed>PASSED</StatusBox>
                    </LeftProposalRow>
                </ProposalRow>
                <ProposalRow>
                    <LeftProposalRow>
                        <ProposalTitle>Proposal 3</ProposalTitle>
                        <StatusBox rejected>Rejected</StatusBox>
                    </LeftProposalRow>
                </ProposalRow>
                </>
)
}