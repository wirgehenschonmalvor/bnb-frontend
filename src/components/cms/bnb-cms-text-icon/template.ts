import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsTextIconProps } from './defines';

export const template = (data: BnbCmsTextIconProps): HTMLFragment => {
	return html`
		${data.heading
			? html`
					<bnb-headline level="3" color="${data.color}"
						>${data.heading}</bnb-headline
					>
			  `
			: ''}
		<div class="text-icon">
			<div class="text-icon--left">
				${data.copyText
					? html`
							<bnb-paragraph><slot name="text" /></bnb-paragraph>
					  `
					: html`
							<bnb-headline level="2" color="${data.color}"
								><slot name="headline"
							/></bnb-headline>
							<bnb-paragraph><slot name="text"/></bnb-paragraph>
					  `}
				${data.button
					? html`
							<bnb-button-cta
								version="${data.button.version}"
								value="${data.button.value}"
								url="${data.button.url}"
								target="${data.button.target}"
								disabled=${data.button.disabled}
							>
							</bnb-button-cta>
					  `
					: ''}
			</div>
			<div class="text-icon--right">
				<bnb-icon icon="${data.icon}"></bnb-icon>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
