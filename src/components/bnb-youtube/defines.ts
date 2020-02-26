import { BnbImageProps } from "../bnb-image/defines";

/**
 *  ## DEFINE ALL INTERFACES FOR BnbYoutube
 **/

/**
 * Props
 */
interface BnbYoutubeProps {
	youtubeId: string;
	thumbnail?: BnbImageProps;
}

interface BnBYoutubeMethods {
  onButtonClick: Function;
}

export { BnbYoutubeProps, BnbImageProps, BnBYoutubeMethods };
