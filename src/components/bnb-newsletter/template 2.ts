import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbNewsletterProps } from './defines';

export const template = (data: BnbNewsletterProps): HTMLFragment => {
	return html`
		<div class="newsletter__wrapper">
			<div class="newsletter-text">
				<slot name="text" />
			</div>
			<div class="newsletter-form">
				<slot name="form" />
				<input type="text" />
				<input type="text" />
				<button>anmelden</button>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
