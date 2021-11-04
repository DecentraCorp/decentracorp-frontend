import { useState } from 'react'
import {Wrapper, Input, P, SubmitBtn} from './Style'
import { useForm, SubmitHandler} from 'react-hook-form';


type Inputs = {
    collateralToken: string;
    amount: string;
};

export default function MintDDProposal(){
    const { register, handleSubmit, formState: { errors },} = useForm<Inputs>();
    const [address, setAddress] = useState<string>();
    const [amount, setAmount] = useState<string>();
 

    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        console.log(data)
    }

return (
    <Wrapper>
        <form onSubmit={handleSubmit(onSubmit)}>
        <P>What token would you like to add?</P>
        <Input
            type='text'
            {...register('collateralToken', {required: true})}
            placeholder={'Collateral Token'}
        />
        <P>How much would you like to collateralize?</P>
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