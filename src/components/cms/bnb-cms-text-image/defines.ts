/**
 *  ## DEFINE ALL INTERFACES FOR BnbCmsTextImage
 **/

/**
 * Props
 */
interface BnbCmsTextImageProps {
	heading: string;
	image: ImageInfo;
}

interface ImageInfo {
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

export { BnbCmsTextImageProps, ImageInfo, ImageCondition, ImageSrc };
