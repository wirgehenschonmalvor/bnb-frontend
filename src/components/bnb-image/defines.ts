/**
 *  ## DEFINE ALL INTERFACES FOR BnbImage
 **/

/**
 * Props
 */
interface BnbImageProps {
	srcset: ImageSrc[];
	sizes: ImageCondition[];
	src: string;
	title: string;
	caption?: string;
	copyright?: string;
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

export { BnbImageProps, ImageSrc, ImageCondition };
