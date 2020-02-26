import { ButtonInfo } from '../bnb-cms-text-icon/defines';
import { BnbImageProps } from '../../bnb-image/defines';

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
	buttonLeft?: ButtonInfo;
	buttonRight?: ButtonInfo;
}

export { BnbCmsStageProps };
