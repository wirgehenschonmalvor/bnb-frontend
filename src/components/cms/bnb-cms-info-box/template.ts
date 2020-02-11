import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsInfoBoxProps } from './defines';

export const template = (data: BnbCmsInfoBoxProps): HTMLFragment => {
	return html`
		<div class="color-container">
			<slot />
		</div>
		${createStyle(styles)}
	`;
};
