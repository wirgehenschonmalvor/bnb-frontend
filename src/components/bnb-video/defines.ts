/**
 *  ## DEFINE ALL INTERFACES FOR BnbVideo
 **/

/**
 * Props
 */
interface BnbVideoProps {
	videoUrl: string;
	autoplay?: boolean;
	muted?: boolean;
	loop?: boolean;
	controls?: boolean;
}

export { BnbVideoProps };
