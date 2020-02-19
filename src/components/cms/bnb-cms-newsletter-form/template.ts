import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsNewsletterFormProps } from './defines';

export const template = (data: BnbCmsNewsletterFormProps): HTMLFragment => {
	return html`
		<div class="newsletter-form-container">
			<div class="newsletter-form-container--left">
				<bnb-headline level="3">newsletter</bnb-headline>
				<bnb-headline level="2"
					>Werde Teil unserers Netzwerks. Folge uns auf Instagram und
					Social Media und melde dich hier für unseren monatlichen
					Newsletter an.</bnb-headline
        >
        <bnb-follow></bnb-follow>
			</div>
			<div class="newsletter-form-container--right">
				<bnb-newsletter></bnb-newsletter>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
