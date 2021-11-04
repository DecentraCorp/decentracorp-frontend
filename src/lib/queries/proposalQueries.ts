import { gql } from '@apollo/client';

export const PROPOSAL_DATA = gql`
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

