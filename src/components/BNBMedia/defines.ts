/**
 *  ## DEFINE ALL INTERFACES FOR BNBMedia
 **/

/**
 * Props
 */
interface BNBMediaProps {
	url: string;
	alt: string;
	caption: string;
	poster: string;
	copyright: string;
	youtubeId: string;
	video: boolean;
	youtube: boolean;
	controls: boolean;
	autoplay: boolean;
	loop: boolean;
	muted: boolean;
}

/**
 * State
 */
interface BNBMediaState {}

export { BNBMediaProps, BNBMediaState };
