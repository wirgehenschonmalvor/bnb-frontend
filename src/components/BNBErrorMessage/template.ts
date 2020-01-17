import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BNBErrorMessageProps } from './defines';

export const template = (data: BNBErrorMessageProps): HTMLFragment => {
	return html`
		<p class="error-message">
			${data.message}
		</p>
		${createStyle(styles)}
	`;
};
