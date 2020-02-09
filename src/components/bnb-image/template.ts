import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';
import { ImageSrc } from './defines';
import { ImageCondition } from './defines';
import { BnbImageProps } from './defines';

const createSrcsetValue = (srcset: ImageSrc[]) =>
	srcset.map(image => `${image.src} ${image.width}w`).join(', ');

const createSizesValue = (sizes: ImageCondition[]) =>
	sizes
		.map(condition =>
			condition.breakpoint
				? `(min-width ${condition.breakpoint}) ${condition.maxWidth}`
				: condition.maxWidth,
		)
		.join(', ');

export const template = (data: BnbImageProps): HTMLFragment => {
	return html`
		${createStyle(`
      :host img {
        object-fit: ${data.objectFit};
        object-position: ${data.objectPosition};
      }
    `)}
		<img
			srcset="${createSrcsetValue(data.srcset)}"
			sizes="${createSizesValue(data.sizes)}"
			src="${data.src}"
			alt="${data.title}"
			aria-label="${data.title}"
		/>
		${createStyle(styles)}
	`;
};
