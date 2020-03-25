import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsTeaserProps } from './defines';

export const template = (data: BnbCmsTeaserProps): HTMLFragment => {
	return html`
		<div class="teaser_wrapper">
			<bnb-teaser heading="${data.heading}" button=${data.button}
				><slot
			/></bnb-teaser>
		</div>
		${createStyle(styles)}
	`;
};
