import { BnbButtonCTAProps } from "../../bnb-button-cta/defines";

/**
 *  ## DEFINE ALL INTERFACES FOR BnbCmsTextIcon
 **/

/**
 * Props
 */
interface BnbCmsTextIconProps {
	icon: string;
	copyText?: boolean;
	heading?: string;
	color?: string;
	button?: BnbButtonCTAProps;
}

export { BnbCmsTextIconProps, BnbButtonCTAProps };
