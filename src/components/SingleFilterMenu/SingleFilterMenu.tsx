//- React/NextJS Imports
import React, { useState, useEffect } from 'react';

import styles from './SingleFilterMenu.module.css';


export type SingleFilterMenuProps = {
	options: string[];
	onSelect: (selected: string) => void;
	defaultSelection?: string | number;
	style?: React.CSSProperties;
	label: string | any;
};

const SingleFilterMenu: React.FC<SingleFilterMenuProps> = (props) => {
	const [selected, setSelected] = useState(
		props.defaultSelection || props.options[0],
	);
	const select = (option: string) => {
		setSelected(option);
		if (props.onSelect) props.onSelect(option);
	};

	return (
		<div style={props.style} className={styles.Simple}>
			<h4>{props.label}</h4>
			<ul>
				{props.options.map((option: string, i: number) => (
					<li
						className={i === selected ? styles.Selected : ''}
						key={option + i}
					>
						<button
							onClick={() => select(option)}
							className={`radio ${option === selected ? 'selected' : ''}`}
						>
							{option}
						</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SingleFilterMenu;
