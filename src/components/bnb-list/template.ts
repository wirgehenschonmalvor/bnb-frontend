import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbListProps } from './defines';

export const template = (data: BnbListProps): HTMLFragment => {
	return html`
		${data.ordered
			? html`
					<ol>
						<slot />
					</ol>
			  `
			: html`
					<ul>
						<slot />
					</ul>
			  `}
		${createStyle(styles)}
	`;
};
