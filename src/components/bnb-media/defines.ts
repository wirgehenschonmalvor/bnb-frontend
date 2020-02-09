/**
 *  ## DEFINE ALL INTERFACES FOR BnbMedia
 **/

/**
 * Props
 */
interface BnbMediaProps {
	youtubeInfo?: YoutubeProps;
	videoInfo?: VideoProps;
	imageInfo?: ImageProps;
	caption?: string;
	copyright?: string;
}

interface YoutubeProps {
	youtubeId: string;
}

interface ImageProps {
	srcset: ImageSrc[];
	sizes: ImageCondition[];
	src: string;
	title: string;
	objectFit?: string;
	objectPosition?: string;
}

interface ImageSrc {
	src: string;
	width: number;
}

interface ImageCondition {
	breakpoint?: string;
	maxWidth: string;
}

interface VideoProps {
	videoUrl: string;
	autoplay?: boolean;
	muted?: boolean;
	loop?: boolean;
	controls?: boolean;
}

export {
	BnbMediaProps,
	ImageCondition,
	ImageSrc,
	ImageProps,
	YoutubeProps,
	VideoProps,
};
