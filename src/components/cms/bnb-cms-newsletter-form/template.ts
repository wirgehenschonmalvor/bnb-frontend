import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsNewsletterFormProps } from './defines';

export const template = (data: BnbCmsNewsletterFormProps): HTMLFragment => {
	return html`
		<div class="newsletter-form-container">
			<div class="newsletter-form-container--left">
				<bnb-headline level="3">newsletter</bnb-headline>
				<bnb-headline level="2"
					>Du willst Brand New Bundestag unterstützen?
				</bnb-headline>
				<bnb-paragraph
					>Dann melde dich für unseren monatlichen Newsletter an und
					erfahre sofort, wenn es etwas Neues gibt.
				</bnb-paragraph>
				<bnb-follow></bnb-follow>
			</div>
			<div class="newsletter-form-container--right">
				<bnb-newsletter></bnb-newsletter>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
