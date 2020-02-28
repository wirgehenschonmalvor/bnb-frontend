import { BnbImageProps } from '../../bnb-image/defines';
import { BnbButtonCTAProps } from '../../bnb-button-cta/defines';

/**
 *  ## DEFINE ALL INTERFACES FOR BnbCmsStage
 **/

/**
 * Props
 */
interface BnbCmsStageProps {
	heading: string;
	icon: string;
	image: BnbImageProps;
	buttonLeft?: BnbButtonCTAProps;
	buttonRight?: BnbButtonCTAProps;
}

export { BnbCmsStageProps };
