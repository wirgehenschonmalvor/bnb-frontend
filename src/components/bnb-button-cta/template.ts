import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbButtonCTAProps } from './defines';

export const template = (data: BnbButtonCTAProps): HTMLFragment => {
	return html`
		<a
			aria-label="${data.value}"
			role="button"
			href="${data.url}"
			target="${data.target}"
			>${data.value}</a
		>
		${createStyle(styles)}
	`;
};
