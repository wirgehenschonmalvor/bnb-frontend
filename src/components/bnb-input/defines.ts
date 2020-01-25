/**
 *  ## DEFINE ALL INTERFACES FOR BnbInput
 **/

/**
 * Props
 */
interface BnbInputProps {
	label: string;
	required: boolean;
	disabled: boolean;
}

/**
 * State
 */
interface BnbInputState {
	error: string;
}

export { BnbInputProps, BnbInputState };
