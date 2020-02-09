/**
 *  ## DEFINE ALL INTERFACES FOR BnbSelect
 **/

/**
 * Props
 */
interface BnbSelectProps {
	disabled?: boolean;
	required?: boolean;
	multiple?: boolean;
	label: string;
	name: string;
	form?: string;
	error?: boolean;
	errorMessage?: string;
	options: Option[];
}

interface Option {
	value: string;
	content: string;
	disabled?: boolean;
	selected?: boolean;
}

/**
 * State
 */
interface BnbSelectState {}

export { BnbSelectProps, BnbSelectState, Option };
