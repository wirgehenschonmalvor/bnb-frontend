import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

export const template = (): HTMLFragment => {
	return html`
		<bnb-headline level="3">anmelden</bnb-headline>
		<div class="newsletter-form">
			<bnb-input
				type="text"
				label="email"
				required
				placeholder="Emailadresse"
			></bnb-input>
			<bnb-input
				type="text"
				label="first name"
				placeholder="Vorname"
			></bnb-input>
			<bnb-input
				type="text"
				label="last name"
				placeholder="Nachname"
			></bnb-input>
			<bnb-checkbox
				id="acceptDataProtection"
				label="accept data protection"
				required
				link
			>
				<bnb-paragraph
					>Ich habe die
					<bnb-link
						value="AGB und Datenschutzbestimmungen"
						url="data-protection.html"
						target="_blank"
					></bnb-link>
					gelesen und akzeptiert.*</bnb-paragraph
				>
			</bnb-checkbox>
			<bnb-button-cta
				version="primary"
				value="Anmelden"
				tab-index="0"
			></bnb-button-cta>
		</div>
		${createStyle(styles)}
	`;
};
