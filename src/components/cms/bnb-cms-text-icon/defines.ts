/**
 *  ## DEFINE ALL INTERFACES FOR BnbCmsTextIcon
 **/

/**
 * Props
 */
interface BnbCmsTextIconProps {
	icon: string;
	heading: string;
	color?: string;
	button?: ButtonInfo;
}

interface ButtonInfo {
	value: string;
	url: string;
	target?: string;
	version?: string;
}

export { BnbCmsTextIconProps, ButtonInfo };
