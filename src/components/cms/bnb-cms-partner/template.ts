import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsPartnerProps } from './defines';

export const template = (data: BnbCmsPartnerProps): HTMLFragment => {
	return html`
		<div class="component-wrapper">
			<bnb-headline level="3">
				${data.heading}
			</bnb-headline>
			<div class="partner-container-top">
				<bnb-icon icon="logo"></bnb-icon>
				<bnb-icon icon="logo"></bnb-icon>
				<bnb-icon icon="logo"></bnb-icon>
				<bnb-icon icon="logo"></bnb-icon>
			</div>
			<div class="partner-container-bottom">
				<bnb-icon icon="logo"></bnb-icon>
				<bnb-icon icon="logo"></bnb-icon>
				<bnb-icon icon="logo"></bnb-icon>
				<bnb-icon icon="logo"></bnb-icon>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
