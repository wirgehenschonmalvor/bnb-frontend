import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbSupporterSlideProps } from './defines';

export const template = (data: BnbSupporterSlideProps): HTMLFragment => {
	return html`
		<div class="quote-wrapper">
			<bnb-headline class="quote">
				<slot />
			</bnb-headline>
			<div class="author-wrapper">
				<bnb-paragraph class="name"
					>${data.author.name}</bnb-paragraph
				>
				${data.author.title
					? html`
							<bnb-paragraph class="title"
								>${data.author.title}</bnb-paragraph
							>
					  `
					: ''}
				${data.author.company
					? html`
							<bnb-paragraph class="company"
								>${data.author.company}</bnb-paragraph
							>
					  `
					: ''}
			</div>
		</div>
		<div class="image-wrapper">
			<bnb-image
					srcset="${data.image.srcset}"
					sizes="${data.image.sizes}"
					src="${data.image.src}"
					title="${data.image.title}"
					object-fit="${data.image.objectFit}"
					object-position="${data.image.objectPosition}"
				></bnb-image>
		</div>
		${createStyle(styles)}
	`;
};
