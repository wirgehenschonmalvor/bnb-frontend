import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsClaimsProps } from './defines';

export const template = (data: BnbCmsClaimsProps): HTMLFragment => {
	return html`
		<div class="component-wrapper">
			<div class="claim-wrapper">
				<bnb-headline level="3">${data.heading}</bnb-headline>
				<bnb-headline class="h1" level="1"
					>${data.headline}</bnb-headline
				>
				<bnb-paragraph><slot name="intro"/></bnb-paragraph>
				<slot name="claims" />
			</div>
		</div>
		${createStyle(styles)}
	`;
};
