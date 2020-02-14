import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsTextIconProps } from './defines';

export const template = (data: BnbCmsTextIconProps): HTMLFragment => {
	return html`
		<bnb-headline level="3" color="${data.color}"
			>${data.heading}</bnb-headline
		>
		<div class="text-icon">
			<div class="text-icon--left">
				<bnb-headline level="2" color="${data.color}"
					><slot
				/></bnb-headline>
			</div>
			<div class="text-icon--right">
				<bnb-icon icon="${data.icon}"></bnb-icon>
			</div>
		</div>
		${data.button
			? html`
					<div class="button">
						<bnb-button-cta
							version="${data.button.version}"
							value="${data.button.value}"
							url="${data.button.url}"
							target="${data.button.target}"
						>
						</bnb-button-cta>
					</div>
			  `
			: ''}
		${createStyle(styles)}
	`;
};
