import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsInfoBoxProps } from './defines';

export const template = (data: BnbCmsInfoBoxProps): HTMLFragment => {
	return html`
		<div class="list-container">
			<bnb-headline color="purple" level="3">
				${data.heading}
			</bnb-headline>
			<slot />
		</div>
		${createStyle(styles)}
	`;
};
