//- React Imports
import { useState, useEffect } from 'react';

//- Style Imports
import styles from './FilterOptions.module.css';

//- Component Imports
import Dropdown from '../Dropdown/Dropdown';

//- Type Imports
import Props from '../DropdownProps.js';

export type FilterOption = {
	header: string;
	options: string[];
};

interface FilterOptionsProps extends Props {
	options: FilterOption[];
	label: string;
	allLabel?: string;
	onSelect: (selected: string[]) => void;
	selected: string[];
	style?: React.CSSProperties;
}

export const FilterOptions: React.FC<FilterOptionsProps> = (props) => {
	const [selected, setSelected] = useState<string[]>(props.selected);
	const [expandedSection, setExpandedSection] = useState<string | undefined>();

	const selectAll = () => {
		setSelected([]);
	};

	const toggleSection = (header: string) => {
		if (expandedSection === header) collapseSections();
		else setExpandedSection(header);
	};

	const collapseSections = () => {
		setExpandedSection(undefined);
	};

	const toggle = (option: string) => {
		if (selected.includes(option))
			setSelected(selected.filter((o: string) => o !== option));
		else setSelected([option, ...selected]);
		if (props.onSelect) props.onSelect(selected);
	};

	const deselect = (option: string) => {
		setSelected(selected.filter((opt) => opt !== option));
	};

	useEffect(() => {
		if (props.onSelect) props.onSelect(selected);
	}, [selected]);

	/////////////////////
	// React Fragments //
	/////////////////////

	const header = (text: string) => (
		<button onClick={() => toggleSection(text)} className={styles.GroupHeader}>
			{text}
			<div>
				<img src={'/assets/arrow-down.svg'} />
			</div>
		</button>
	);

	const optionButton = (text: string) => (
		<li key={text}>
			<button
				className={`radio ${selected.includes(text) ? 'selected' : ''}`}
				onClick={() => toggle(text)}
			>
				{text}
			</button>
		</li>
	);

	const selectedButton = (text: string) => (
		<li key={text}>
			<button
				onClick={() => toggle(text)}
				className={`radio alt ${selected.includes(text) ? 'selected' : ''}`}
				style={{
					display: selected.includes(text) ? 'block' : 'none',
				}}
			>
				{text}
			</button>
		</li>
	);

	const allButton = () => (
		<li key="all">
			<button
				onClick={selectAll}
				className={`radio alt ${selected.length === 0 ? 'selected' : ''}`}
			>
				{!props.allLabel ? 'All' : props.allLabel}
			</button>
		</li>
	);

	////////////
	// Render //
	////////////

	return (
		<div className={styles.Filters}>
			<h5>{props.label}</h5>
			<ul className={styles.Selected}>
				{allButton()}
				{props.options
					.map((option: FilterOption) => option.options)
					.flat()
					.map((option: string) => selectedButton(option))}
			</ul>
			<ul className={styles.Groups}>
				{props.options.map((option: FilterOption, i: number) => (
					<li
						className={`${styles.Group} ${
							expandedSection === option.header ? styles.Open : ''
						}`}
						key={option.header}
					>
						{header(option.header)}
						{expandedSection === option.header && (
							<ul>
								{option.options.map((o: string, i: number) => optionButton(o))}
							</ul>
						)}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FilterOptions;
