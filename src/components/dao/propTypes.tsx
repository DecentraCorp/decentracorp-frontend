import styles from './prop.module.css'
//- React/NextJS Imports
import React, { useState, useRef, useEffect, SetStateAction } from 'react';

export const royalties = [
	{
		name: 'mint',
		numberP: 1000,
	},
	{
		name: '10%',
		numberP: 10000,
	},
	{
		name: '15%',
		numberP: 15000,
	},
	{
		name: '20%',
		numberP: 20000,
	},
];

export type Royalty = {
	name: any;
	numberP: any;
};

export type CurrencyInputProps = {
	className?: string;
	onChange?: (query: string) => void;
	onFocus?: () => void;
	onSubmit: (query: string) => void;
	placeholder?: string;
	style?: React.CSSProperties;
	dropdownOnly?: boolean;
};

const PropInput: React.FC<CurrencyInputProps> = ({
	className,
	onChange,
	onFocus,
	onSubmit,
	placeholder,
	style,
	dropdownOnly,
}) => {
	//////////////////
	// State & Refs //
	//////////////////

	// const [currentValue, setCurrentValue] = useState('');
	const [isFocused, setIsFocused] = useState(false);
	const [selectedRoyalties, setSelectedRoyalties] = useState<Royalty>(
		royalties[0],
	);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);

	const inputRef = useRef<HTMLInputElement | any>();
	const currencyButtonRef = useRef<HTMLButtonElement | any>(null);

	///////////////
	// Functions //
	///////////////

	useEffect(() => {
		console.log('selected royalties ', selectedRoyalties);
	}, [selectedRoyalties]);

	const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
	const closeDropdown = () => setIsDropdownOpen(false);

	const selectCurrency = (royalty: Royalty) => {
		setSelectedRoyalties(royalty);
	};

	const unFocus = () => {
		setIsFocused(false);
		inputRef.current.blur();
	};

	const focus = () => {
		setIsFocused(true);
		if (onFocus) onFocus();
	};

	const setFocus = (e: any) => {
		try {
			if (currencyButtonRef.current.contains(e.target)) return;
			inputRef.current.focus();
		} catch {
			console.error('Failed to focus on input');
		}
	};

	const checkEscape = (e: any) => {
		// @TODO reimplement
		// if (event.key !== 'Escape') return;
		// clear();
	};

	const submit = (e: any) => {
		e.preventDefault();
		if (onSubmit) onSubmit(inputRef.current.value ?? '');
	};

	const change = (e: any) => {
		const num = Number(inputRef.current.value);
		if (!num || num < 0) return;
		// setAmount(inputRef.current.value ?? '');

		// console.log(amount, '1');
		if (onChange) onChange(inputRef.current.value ?? '');
	};

	const clear = () => {
		inputRef.current.value = '';
		// setAmount('');
		if (onSubmit) onSubmit('');
	};

	/////////////
	// Effects //
	/////////////

	useEffect(() => {
		if (isDropdownOpen) window.addEventListener('click', closeDropdown);
		else window.removeEventListener('click', closeDropdown);

		return () => {
			window.removeEventListener('click', closeDropdown);
		};
	}, [isDropdownOpen]);

	///////////////
	// Fragments //
	///////////////

	const dropdown = (royaltys: Royalty[]) => (
		// @TODO worth making a generic dropdown component?
		<div className={styles.Dropdown}>
			<h5>Select Royalty Amount</h5>
			<ul className={styles.Currencies}>
				{royaltys.map((royalty: Royalty, i) => dropdownButton(royalty, i))}
			</ul>
		</div>
	);

	const dropdownButton = (royalty: Royalty, i: any) => (
		<li key={royalty.name} tabIndex={0} className={styles.Currency}>
			<button
				onClick={() => {
					setSelectedRoyalties(royalties[i]);
					// setNumber(royalty.numberP);
				}}
				onChange={() => console.log(royalty.numberP)}
			>
				{console.log(royalty.numberP, '164')}

				<div>
					<span>{royalty.name}</span>
				</div>
			</button>
		</li>
	);

	const currencyButton = (image: string, name: any) => (
		<button
			onClick={toggleDropdown}
			className={`${styles.Selected} ${
				isDropdownOpen ? styles.Open : styles.Closed
			}`}
			ref={currencyButtonRef}
		>
			<span>{name}</span>
			<img src="/assets/arrow-down.svg" />
		</button>
	);

	////////////
	// Render //
	////////////

	return (
		<div
			style={style}
			className={`input-wrapper ${styles.Wrapper} ${
				isFocused ? 'input-focused' : ''
			} ${className ? className : ''}`}
			onClick={setFocus}
		>
			{isDropdownOpen && dropdown(royalties)}
			{currencyButton(selectedRoyalties.name, selectedRoyalties.name)}
			{!dropdownOnly && (
				<form onSubmit={submit}>
					<div
						ref={inputRef}
						onFocus={focus}
						onBlur={unFocus}
						onChange={change}
						placeholder={placeholder ?? `Amount (${selectedRoyalties.name})`}
						onKeyDown={checkEscape}
					/>
					<div>{`${selectedRoyalties.name}`} </div>
					{/* {console.log(amount, 'number')} */}
				</form>
			)}
		</div>
	);
};

export default PropInput;