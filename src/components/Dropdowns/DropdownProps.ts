interface DropdownProps {
	label?: string;
	headerText?: string;
	headerElement?: React.ReactNode;
	children?: React.ReactNode;
	style?: React.CSSProperties;
	labelStyle?: React.CSSProperties;
	headerStyle?: React.CSSProperties;
	rightAligned?: boolean;
	centerAligned?: boolean;
	menuOpen?: boolean;
	hideLabel?: boolean;
};

export default DropdownProps;
