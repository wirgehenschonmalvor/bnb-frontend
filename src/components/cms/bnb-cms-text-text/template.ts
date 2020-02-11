import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsTextTextProps } from './defines';

export const template = (data: BnbCmsTextTextProps): HTMLFragment => {
	return html`
		<div class="text-text">
			<div class="text-text--left">
				<slot name="left" />
			</div>
			<div class="text-text--right">
				<slot name="right" />
			</div>
		</div>
		${createStyle(styles)}
	`;
};
