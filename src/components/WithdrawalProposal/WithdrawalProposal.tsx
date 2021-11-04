import { useState } from 'react'
import {Wrapper, Input, P, SubmitBtn} from './Style'
import {ethers} from 'ethers';
import { useForm, SubmitHandler} from 'react-hook-form';


type Inputs = {
    address: string;
    amount: string;
    type: string;
};

export default function MintDDProposal(){
    const { register, handleSubmit, formState: { errors },} = useForm<Inputs>();
    const [address, setAddress] = useState<string>();
    const [amount, setAmount] = useState<string>();
    const [type, setType] = useState<string>();
 // address and amount

    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        console.log(data)
    }

return (
    <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
        <P>Where would you like to withdraw your funds to? (wallet address)</P>
        <Input
            type='text'
            {...register('address', {required: true})}
            placeholder={'address'}
        />
        <P>How much would you like to withdraw?</P>
        <Input
            type='text'
            {...register('amount', {required: true})}
            placeholder={'amount'}
        />
        <P>What is the token type you are withdrawing?</P>
        <Input
            type='text'
            {...register('type', {required: true})}
            placeholder={'type'}
        />
        <SubmitBtn type='submit' value='Submit' />
        </form>
    </Wrapper>
)
}