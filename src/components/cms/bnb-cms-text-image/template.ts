import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsTextImageProps } from './defines';

export const template = (data: BnbCmsTextImageProps): HTMLFragment => {
	return html`
		<div class="text-image">
			<div class="text-image--left">
				<bnb-headline level="3">${data.heading}</bnb-headline>
				<bnb-headline level="2"><slot /></bnb-headline>
				<slot name="text" />
			</div>
			<div class="text-image--right">
				<bnb-image
					srcset="${data.image.srcset}"
					sizes="${data.image.sizes}"
					src="${data.image.src}"
					title="${data.image.title}"
					object-fit="${data.image.objectFit}"
					object-position="${data.image.objectPosition}"
				></bnb-image>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
