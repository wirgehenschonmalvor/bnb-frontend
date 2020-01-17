import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BNBLinkProps, BNBLinkState, BNBLinkMethods } from './defines';

export const template = (
	data: BNBLinkProps & BNBLinkState & BNBLinkMethods,
): HTMLFragment => {
	return html`
		<a aria-label="${data.value}" href="${data.url}" target="${data.target}"
			>${data.value}</a
		>
		${createStyle(styles)}
	`;
};
