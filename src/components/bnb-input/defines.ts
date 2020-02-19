/**
 *  ## DEFINE ALL INTERFACES FOR BnbInput
 **/

/**
 * Props
 */
interface BnbInputProps {
	label: string;
	placeholder: string;
	required: boolean;
	disabled: boolean;
	type?: string;
}

/**
 * State
 */
interface BnbInputState {
	error: string;
}

export { BnbInputProps, BnbInputState };
