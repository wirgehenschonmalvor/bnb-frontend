/**
 *  ## DEFINE ALL INTERFACES FOR BNBMedia
 **/

/**
 * Props
 */
interface BNBMediaProps {
	imageUrl: string;
	videoUrl: string;
	audioUrl: string;
	youtubeId: string;
	alt: string;
	caption: string;
	poster: string;
	copyright: string;
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
