import { useState, useEffect } from 'react';
import {DropdownContainer, DropdownBox, P, Span, Wrapper, FormWrapper} from './Style';
import { DropdownMenu } from 'components/DropdownMenu/DropdownMenu';
import MintDDProposal from 'components/MintDDProposalForm/MintDDProposal';
import MintDsProposal from 'components/MintDsProposal/MintDsProposal';
import WithdawalProposal from 'components/WithdrawalProposal/WithdrawalProposal';
import BurnProposal from 'components/BurnProposal/BurnProposal';
import BurnStockProposal from 'components/BurnStockProposal/BurnStockProposal';
import AddCollateralProposal from 'components/AddCollateralProposal/AddCollateralProposal';


export default function CreateNewProposalView(){

    const proposalTypes = [
        {value: 'mintDd', label: <Span>Mint</Span>},
        {value: 'mintDs', label: <Span>Mint Stock</Span>},
        {value: 'withdraw', label: <Span>Withdraw Funds</Span>},
        {value: 'collateral', label: <Span>Collateral</Span>},
        {value: 'generic', label: <Span>Generic</Span>},
        {value: 'burnDd', label: <Span>Burn DecentraDollar</Span>},
        {value: 'burnDs', label: <Span>Burn DecentraStock</Span>},
        {value: 'empty', label: <Span></Span>},
    ];
    const [proposalType, setProposalType] = useState<any>(proposalTypes[0]);

    /**
     * function, hash, c-data into generic proposal
     */

    useEffect(() => {
        proposalType !== undefined && handleView();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [proposalType])

    const handleView = () => {
        switch(proposalType.value) {
            case 'mintDd':
                return <MintDDProposal />;
            case 'mintDs':
                return <MintDsProposal />;
            case 'withdraw':
                return <WithdawalProposal />;
            case 'burnDd':
                return <BurnProposal />
            case 'burnDs':
                return <BurnStockProposal />
            case 'collateral':
                return <AddCollateralProposal />
            //TODO: Generic and pretty up components
            default:
                break; 
        }
    }

return (
    <Wrapper>
    <DropdownContainer>
        <P>Type of proposal</P>
            <DropdownBox>
                <DropdownMenu setCurrent={setProposalType} options={proposalTypes} wide />
            </DropdownBox>
    </DropdownContainer>
        <FormWrapper>
            {handleView()}
        </FormWrapper>
    </Wrapper>
)
}