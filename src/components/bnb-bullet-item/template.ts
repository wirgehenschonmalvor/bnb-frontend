import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbBulletItemProps } from './defines';

export const template = (data: BnbBulletItemProps): HTMLFragment => {
	return html`
		<div class="item__wrapper">
			<bnb-icon icon="${data.icon}"></bnb-icon>
			<slot />
		</div>
		${createStyle(styles)}
	`;
};
