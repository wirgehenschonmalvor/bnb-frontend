import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbBulletItemProps } from './defines';

export const template = (data: BnbBulletItemProps): HTMLFragment => {
	return html`
		<div class="item__wrapper">
			<bnb-icon icon="${data.icon}"></bnb-icon>
			<bnb-pagragraph id="headline"
				><slot name="headline"
			/></bnb-pagragraph>
			<bnb-pagragraph id="text"><slot name="text"/></bnb-pagragraph>
		</div>
		${createStyle(styles)}
	`;
};
