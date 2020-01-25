import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbListProps } from './defines';

export const template = (data: BnbListProps): HTMLFragment => {
	return html`
		<slot />
		${createStyle(styles)}
	`;
};
