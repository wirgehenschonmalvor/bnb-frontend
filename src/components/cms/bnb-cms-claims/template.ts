import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsClaimsProps } from './defines';

export const template = (data: BnbCmsClaimsProps): HTMLFragment => {
	return html`
		<bnb-headline level="3">${data.heading}</bnb-headline>
		<div class="claim-wrapper">
			<div class="claim-wrapper--left">
				<bnb-accordion
					class="claim1"
					id="${data.id1}"
					label="${data.label1}"
					><slot name="1"
				/></bnb-accordion>
				${data.label2
					? html`
							<bnb-accordion
								class="claim2"
								id="${data.id2}"
								label="${data.label2}"
								><slot name="2"
							/></bnb-accordion>
					  `
					: ''}
			</div>
			<div class="claim-wrapper--left">
				${data.label3
					? html`
							<bnb-accordion
								class="claim3"
								id="${data.id3}"
								label="${data.label3}"
								><slot name="3"
							/></bnb-accordion>
					  `
					: ''}
				${data.label4
					? html`
							<bnb-accordion
								class="claim4"
								id="${data.id4}"
								label="${data.label4}"
								><slot name="4"
							/></bnb-accordion>
					  `
					: ''}
			</div>
		</div>
		${createStyle(styles)}
	`;
};
