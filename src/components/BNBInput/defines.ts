/**
 *  ## DEFINE ALL INTERFACES FOR BNBInput
 **/

/**
 * Props
 */
interface BNBInputProps {
	label: string;
	required: boolean;
	disabled: boolean;
}

/**
 * State
 */
interface BNBInputState {
	error: string;
}

export { BNBInputProps, BNBInputState };
