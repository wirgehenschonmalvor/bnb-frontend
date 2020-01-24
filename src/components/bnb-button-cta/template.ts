import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import {
	BnbButtonCTAProps,
	BnbButtonCTAState,
	BnbButtonCTAMethods,
} from './defines';

export const template = (
	data: BnbButtonCTAProps & BnbButtonCTAState & BnbButtonCTAMethods,
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
