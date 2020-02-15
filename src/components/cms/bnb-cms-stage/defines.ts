import { ImageInfo } from '../bnb-cms-text-image/defines';
import { ButtonInfo } from '../bnb-cms-text-icon/defines';

/**
 *  ## DEFINE ALL INTERFACES FOR BnbCmsStage
 **/

/**
 * Props
 */
interface BnbCmsStageProps {
	heading: string;
	icon: string;
	image: ImageInfo;
	buttonLeft?: ButtonInfo;
	buttonRight?: ButtonInfo;
}

export { BnbCmsStageProps };
