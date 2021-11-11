import { gql } from '@apollo/client';
import { client } from 'App';

export async function ProposalData(){
    const PROPOSAL = await client.query({
       query: gql`
       query Proposal($id: ID!){
           id
           creator {
               id
           }
           target
           timeCreated
           executed 
           proposalPassed
           proposalHash
           votes
       }
       ` 
    })
    return PROPOSAL
}


export const VOTE_DATA = gql`
query Proposal($id: ID!){
    id
    account {
        id
    }
    inFavor
    proposal
}
`


export const ACCOUNT_DATA = gql`
query Proposal($id: ID!){
    id
    proposals
    votes
}
`

