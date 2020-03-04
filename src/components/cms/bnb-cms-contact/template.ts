import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsContactProps, BnbCmsContactMethods } from './defines';

export const template = (
	data: BnbCmsContactProps & BnbCmsContactMethods,
): HTMLFragment => {
	return html`
		<!-- <bnb-headline level="3">Kontakt</bnb-headline> -->
		<div class="contact__wrapper">
			<div class="contact__text">
				<bnb-paragraph>
					<slot />
				</bnb-paragraph>
				<br />
				<bnb-paragraph><b>So erreichst du uns:</b></bnb-paragraph>
				<br />
				<bnb-paragraph>
					Wir für Zukunft eG i. Gr.<br />
					Glindweg 22<br />22303 Hamburg<br />
					<bnb-link
						footer
						value="team@brandnewbundestag.de"
						url="mailto:team@brandnewbundestag.de"
					></bnb-link>
				</bnb-paragraph>
			</div>
			<div class="contact__inputs">
				<bnb-paragraph>
					<b>Spenden an:</b>
					<br />
					<br />
					<b>Empfänger:</b> Brand New Bewegung e.V.
					<br />
					<b>IBAN:</b> DE16 4306 0967 1039 9676 00
					<br />
					<b>BIC:</b> GENODEM1GLS
					<br />
					<b>Verwendungszweck:</b> Brand New Bundestag
					<br />
					<br />
					Unsere gemeinnützige politische Bildungsarbeit, mit der wir
					Menschen dafür begeistern möchten, sich politisch zu
					engagieren, betreiben wir über den BNB eV. Diese kannst du
					mit einer Spende unterstützen. Vielen Dank!
				</bnb-paragraph>
				<!-- <bnb-input
					required
					label="Name"
					placeholder="Name (Bsp: Vorname Nachname)"
					class="contact__inputs--name"
				></bnb-input>
				<bnb-input
					required
					label="Email"
					placeholder="E-Mail (Bsp: kontakt@brandnewbundestag.de)"
					class="contact__inputs--email"
				></bnb-input>
				<bnb-input
					type="number"
					label="Telefon"
					placeholder="Telefon (Bsp: +49157-1234567)"
					class="contact__inputs--telephone"
				></bnb-input>
				<bnb-textarea
					required
					label="Nachricht"
					placeholder="Deine Nachricht"
					class="contact__inputs--message"
				></bnb-textarea>
				<bnb-checkbox
					required
					id="confirmCheckbox"
					label="Datenschutzbestimmungen und Nutzungsbedingungen akzeptiert"
					link
				>
					<bnb-paragraph
						>Ich habe die
						<bnb-link
							value="Datenschutzbestimmungen"
							url="datenschutz.html"
							target="_blank" external
						></bnb-link>
						gelesen und akzeptiert.*</bnb-paragraph
					>
				</bnb-checkbox> -->
			</div>
		</div>
		<!-- <bnb-button-cta
			value="Absenden"
			version="primary"
			tab-index="0"
		></bnb-button-cta> -->
		${createStyle(styles)}
	`;
};
