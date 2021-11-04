import { InfoDisplayWrapper, ProposalsDisplay } from './Style'
import ActiveProposals from 'components/ActiveProposals/ActiveProposals';
import VotingAddresses from 'components/VotingAddresses/VotingAddresses';
import VotesDelegated from 'components/VotesDelegated/VotesDelegated';
import ProposalsList from 'components/ProposalsList/ProposalsList';


//interface Props {
//Props Here
//}


export default function ViewDaoProposals(){

    //TODO: Break into smaller components. Pending data flow...

return (
    <>
    <InfoDisplayWrapper>
        <ActiveProposals />
        <VotingAddresses />
        <VotesDelegated />
    </InfoDisplayWrapper>
    <ProposalsDisplay>
        <ProposalsList />
    </ProposalsDisplay>
    </>
)
}