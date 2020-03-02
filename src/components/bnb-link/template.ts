import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbLinkProps } from './defines';

export const template = (data: BnbLinkProps): HTMLFragment => {
	return html`
		<a aria-label="${data.value}" href="${data.url}" target="${data.target}"
			>${data.value}
			${data.external
				? html`
						<bnb-icon icon="external"></bnb-icon>
				  `
				: ''}
		</a>
		${createStyle(styles)}
	`;
};
