import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import {
	BNBButtonCTAProps,
	BNBButtonCTAState,
	BNBButtonCTAMethods,
} from './defines';

export const template = (
	data: BNBButtonCTAProps & BNBButtonCTAState & BNBButtonCTAMethods,
): HTMLFragment => {
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
