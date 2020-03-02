import { BnbImageProps } from "../../bnb-image/defines";

/**
 *  ## DEFINE ALL INTERFACES FOR BnbCmsTextImage
 **/

/**
 * Props
 */
interface BnbCmsTextImageProps {
	heading: string;
	image: BnbImageProps;
	light?: boolean;
}

export { BnbCmsTextImageProps, BnbImageProps};
