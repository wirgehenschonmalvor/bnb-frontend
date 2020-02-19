import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbBulletListProps } from './defines';

export const template = (data: BnbBulletListProps): HTMLFragment => {
	return html`
		<slot name="heading" />
		<div class="bullet-list__wrapper"><slot name="list" /></div>
		${createStyle(styles)}
	`;
};
