import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbAccordionProps } from './defines';

export const template = (data: BnbAccordionProps): HTMLFragment => {
	return html`
		<div class="accordion">
			<input type="checkbox" id="${data.id}" name="accordion-item" />
			<label for="${data.id}"
				><bnb-headline level="2">
					<bnb-icon icon="arrow"></bnb-icon
					>${data.label}</bnb-headline
				></label
			>
			<div class="text">
				<bnb-paragraph>
					<slot />
				</bnb-paragraph>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
