import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbBulletItemProps } from './defines';

export const template = (data: BnbBulletItemProps): HTMLFragment => {
	return html`
		<div class="item__wrapper">
			<img src="https://dummyimage.com/100x100/000/fff&text=ICON" />
			<slot />
		</div>
		${createStyle(styles)}
	`;
};
