//- React Imports
import { useState } from 'react';

//- Style Imports
import styles from './SimpleOptionDropdown.module.css';

//- Component Imports
import Dropdown from '../Dropdown/Dropdown';
import  SingleFilterMenu  from '../../SingleFilterMenu/SingleFilterMenu';

//- Type Imports
import Props from '../DropdownProps';

interface SimpleOptionDropdownProps extends Props {
	options: any[];
	onSelect: (selected: any) => void;
	customHeaderText?: string;
}




const SimpleOptionDropdown: React.FC<SimpleOptionDropdownProps> = (props) => {


	const [selected, setSelected] = useState(!props.customHeaderText ? props.options[0] : props.customHeaderText);

	const select = (option: string) => {
		setSelected(option);
		props.onSelect && props.onSelect(option);
	};

	return (
		<Dropdown headerText={selected} {...props}>
			<SingleFilterMenu
				label={props.label}
				onSelect={select}
				options={props.options}
				defaultSelection={selected}
			/>
		</Dropdown>
	);
};

export default SimpleOptionDropdown;
