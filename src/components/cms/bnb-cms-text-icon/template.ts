import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsTextIconProps } from './defines';

export const template = (data: BnbCmsTextIconProps): HTMLFragment => {
	return html`
		<slot name="heading" />
		<div class="text-icon">
			<div class="text-icon--left">
				<slot />
			</div>
			<div class="text-icon--right">
				<slot name="icon" />
			</div>
		</div>
		<div class="button">
			<slot name="button" />
		</div>
		${createStyle(styles)}
	`;
};
