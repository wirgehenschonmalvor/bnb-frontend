import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsTextTextProps } from './defines';

export const template = (data: BnbCmsTextTextProps): HTMLFragment => {
	return html`
		<div class="text-text">
			<div class="text-text--left">
				<bnb-headline level="3" color="${data.color}"
					>${data.headingLeft}</bnb-headline
				>
				<bnb-headline level="2" color="${data.color}"
					><slot name="left"
				/></bnb-headline>
			</div>
			<div class="text-text--right">
				<bnb-headline level="3" color="${data.color}"
					>${data.headingRight}</bnb-headline
				>
				<bnb-headline level="2" color="${data.color}"
					><slot name="right"
				/></bnb-headline>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
