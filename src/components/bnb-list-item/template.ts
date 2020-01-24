import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbListItemProps } from './defines';

export const template = (data: BnbListItemProps): HTMLFragment => {
	return html`
		<slot />
		${createStyle(styles)}
	`;
};
