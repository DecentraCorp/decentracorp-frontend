import active from '../../assets/ActiveClock.svg';
import {
    WhiteDisplay,
    StatusBox,
    Indicator,
    TransactRow,
    LeftTransactRow,
    TransactionDetails,
    TransactionType,
} from './Style'

//interface ProposalsListProps {
//Props Here
//}


export default function ProposalsList(){

return (
    <>
    <WhiteDisplay>Transaction History</WhiteDisplay>
                <TransactRow>
                    <LeftTransactRow>
                        <TransactionType>Withdraw</TransactionType>
                        <StatusBox withdrawl>Aug 26-Pending</StatusBox>
                    </LeftTransactRow>
                        <TransactionDetails>Withdrawl Pending</TransactionDetails>
                    <Indicator> -2000 XYZT</Indicator>

                </TransactRow>
                <TransactRow>
                    <LeftTransactRow>
                        <TransactionType>Deposit</TransactionType>
                        <StatusBox deposit>Oct 14-Pending</StatusBox>
                    </LeftTransactRow>
                    <TransactionDetails>Deposit Pending</TransactionDetails>
                    <Indicator>+3000 XYZT</Indicator>
                </TransactRow>
                <TransactRow>
                    <LeftTransactRow>
                        <TransactionType>Withdraw Complete</TransactionType>
                        <StatusBox withdrawl>Oct 1 Complete</StatusBox>
                    </LeftTransactRow>
                    <TransactionDetails></TransactionDetails>
                    <Indicator> -14000 XYZT</Indicator>
                </TransactRow>
                </>
)
}