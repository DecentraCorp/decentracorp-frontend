import React, { useEffect} from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
    Form,
    H1,
    InnerWrap,
    Input,
    Label,
    P,
    SubmitBtn,
    Wrapper
} from './Style';

type Inputs = {
    name: string;
    description: string;
    url: string;
}


const CreateProfileForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data: any) => {
        //setProfile(data)
    };
    


    return (
        <Wrapper>
            <InnerWrap>
                <H1>Please Enter your information</H1>
                <P>We&apos;ll save it to your profile!</P>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Label>Name</Label>
                    <Input defaultValue='Test' name='name' ref={register} />
                    <Label>Description</Label>
                    <Input defaultValue='Description' name='description' ref={register} />
                    <Label>Url</Label>
                    <Input defaultValue='url' name='url' ref={register} />
                    <SubmitBtn type="submit" value="Continue" />
                </Form>
            </InnerWrap>
        </Wrapper>
    )
}

export default CreateProfileForm;