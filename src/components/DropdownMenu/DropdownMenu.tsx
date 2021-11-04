import React, { useState } from 'react';
import Select from 'react-select';
import { components } from 'react-select';
import {
    Container,
    Image,
    Span,
} from './Style'

const customStyles = {
    option: (provided: any, state: any) => ({
        ...provided,
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#353b3b',
        fontFamily: 'Spartan',
        fontSize: '18px',
    }),
    control: (provided: any) => ({
        ...provided,
        backgroundColor: '#353b3b',
        border: 'none',
        boxShadow: 'none'
    }),
    menu: (provided: any, state: any) => ({
        backgroundColor: '#353b3b',
        borderRadius: '8px',
        border: 'none',
        boxShadow: '10px 14px 28px -10px #01FFA5'
    }),
}

// Will need to build data aggregator once calls are made
interface DropDownProps {
    setCurrent: any;
    options?: {value: string; label: JSX.Element}[];
    wide?: boolean;
}

export const DropdownMenu = ({setCurrent, options, wide}: DropDownProps) => {
    const [selectedOption, setSelectedOption] = useState<any>();

    const handleChange = (e: any) => {
        console.log(e);
        setSelectedOption(e);
        setCurrent(e);
    }
    return (
        <Container wide={wide ? wide : false}>
            <Select
                value={selectedOption}
                onChange={(e: any) => handleChange(e)}
                options={options}
                styles={customStyles}
            />
        </Container>
    )
}