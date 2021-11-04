import { useState } from 'react'
import {Wrapper, Input, P, SubmitBtn} from './Style'
import { useForm, SubmitHandler} from 'react-hook-form';

//interface MintDDProposalProps {
//Props Here
//}

type Inputs = {
    address: string;
    amount: string;
};

export default function MintDDProposal(){
    const { register, handleSubmit, formState: { errors },} = useForm<Inputs>();
    const [address, setAddress] = useState<string>();
    const [amount, setAmount] = useState<any>();
 // address and amount

    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        console.log('Submit')
        console.log(data)
        // setAddress(data.address);
        // setAmount(ethers.utils.parseEther(data.amount))
    }

return (
    <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
        <P>Where would you like the DecentraStock minted to?</P>
        <Input
            type='text'
            {...register('address', {required: true})}
            placeholder={'address'}
        />
        <P>How much DecentraStock would you like minted?</P>
        <Input
            type='text'
            {...register('amount', {required: true})}
            placeholder={'amount'}
        />
        <SubmitBtn type='submit' value='Submit' />
        </form>
    </Wrapper>
)
}