import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbErrorMessageProps } from './defines';

export const template = (data: BnbErrorMessageProps): HTMLFragment => {
	return html`
		<p class="error-message">
			${data.message}
		</p>
		${createStyle(styles)}
	`;
};
