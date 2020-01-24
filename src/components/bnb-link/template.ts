import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbLinkProps, BnbLinkState, BnbLinkMethods } from './defines';

export const template = (
	data: BnbLinkProps & BnbLinkState & BnbLinkMethods,
): HTMLFragment => {
	return html`
		<a aria-label="${data.value}" href="${data.url}" target="${data.target}"
			>${data.value}</a
		>
		${createStyle(styles)}
	`;
};
