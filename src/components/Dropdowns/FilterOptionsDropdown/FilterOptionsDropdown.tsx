//- React Imports
import { useState, useEffect } from 'react';

//- Style Imports
import styles from './FilterOptions.module.css';

//- Component Imports
import Dropdown from '../Dropdown/Dropdown';
import FilterOptions from './FilterOptions';

//- Type Imports
import Props from '../DropdownProps';

export type FilterOption = {
	header: string;
	options: string[];
};

interface FilterOptionsDropdownProps extends Props {
	options: FilterOption[];
	label: string;
	selected: string[];
	onSelect: (selected: string[]) => void;
	style?: React.CSSProperties;
	headerElement?: React.ReactNode;
	allLabel?: string;
}

export const FilterOptionsDropdown: React.FC<FilterOptionsDropdownProps> = (
	props,
) => {
	return (
		<Dropdown headerText={!props.allLabel ? 'All' : props.allLabel} {...props}>
			<FilterOptions {...props} />
		</Dropdown>
	);
};

export default FilterOptionsDropdown;
