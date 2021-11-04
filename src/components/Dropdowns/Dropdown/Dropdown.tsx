//- React Imports
import { useState, useEffect, useRef } from 'react';

//- Style Imports
import styles from './Dropdown.module.css';

//- Type Imports
import Props from '../DropdownProps';

import arrowDown from '../../../assets/arrowDown.svg'
const Dropdown: React.FC<Props> = ({
	centerAligned,
	children,
	headerStyle,
	headerText,
	label,
	labelStyle,
	menuOpen,
	rightAligned,
	style,
	headerElement,
	hideLabel,
}) => {
	//////////////////
	// State & Refs //
	//////////////////

	const dropdownRef = useRef<HTMLDivElement>(null);
	const [isMenuOpen, setIsMenuOpen] = useState(menuOpen ?? false);
	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
	const closeMenu = (e: any) => {
		if (!dropdownRef.current) return;
		if (dropdownRef.current.contains(e.target)) return;
		setIsMenuOpen(false);
	};

	/////////////
	// Effects //
	/////////////

	// Handle clicks outside of menu
	useEffect(() => {
		if (isMenuOpen) window.addEventListener('click', closeMenu);
		else window.removeEventListener('click', closeMenu);

		return () => {
			window.removeEventListener('click', closeMenu);
		};
	}, [isMenuOpen]);

	/////////////////////
	// React Fragments //
	/////////////////////

	const header = () => {
		return (
			<>
				{headerElement && (
					<div style={{ borderBottom: 'none' }} onClick={toggleMenu}>
						{headerElement}
					</div>
				)}
				{!headerElement && (
					<button
						onClick={toggleMenu}
						style={{
							borderBottomColor: isMenuOpen
								? 'var(--color-primary)'
								: 'var(--color-mint)',
						}}
						className={styles.Header}
					>
						{headerText}
						<img
							className={styles.Arrow}
							style={{
								transform: isMenuOpen
									? 'rotate(-180deg) translateY(75%)'
									: 'rotate(0deg) translateY(-50%)',
							}}
							src={'/assets/arrow-down.svg'}
						/>
					</button>
				)}
			</>
		);
	};

	return (
		<div style={style} ref={dropdownRef} className={styles.Container}>
			{label && !hideLabel && <label style={labelStyle}>{label}:</label>}
			{header()}
			{children && isMenuOpen && (
				<div
					className={`${styles.Menu} ${
						centerAligned === true ? styles.Center : ''
					} ${rightAligned === true ? styles.Right : ''}`}
				>
					{children}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
