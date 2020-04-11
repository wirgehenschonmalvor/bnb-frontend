import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsContactProps, BnbCmsContactMethods } from './defines';

export const template = (
	data: BnbCmsContactProps & BnbCmsContactMethods,
): HTMLFragment => {
	return html`
		<div class="contact__wrapper">
			<div class="contact__text">
				<bnb-paragraph>
					<slot />
				</bnb-paragraph>
				<br />
				<bnb-paragraph><b>So erreichst du uns:</b></bnb-paragraph>
				<bnb-paragraph>
					Wir für Zukunft eG i. Gr.<br />
					Glindweg 22<br />22303 Hamburg<br />
					<bnb-link
						value="team@brandnewbundestag.de"
						url="mailto:team@brandnewbundestag.de"
					></bnb-link>
				</bnb-paragraph>
				<br />
				<br />
				<bnb-paragraph>
					<b>Finanzielle Unterstützung (nicht gemeinnützig) an:</b>
					<br />
					<br />
					<b>Empfänger:</b> Brand New Bewegung e.V.
					<br />
					<b>IBAN:</b> DE17 4306 0967 1059 7453 00
					<br />
					<b>BIC:</b> GENODEM1GLS
					<br />
					<b>Verwendungszweck:</b> Brand New Bundestag
					<!-- <br />
					<br />
					Unsere gemeinnützige politische Bildungsarbeit, mit der wir
					Menschen dafür begeistern möchten, sich politisch zu
					engagieren, betreiben wir über den BNB eV. Diese kannst du
					mit einer Spende unterstützen. Vielen Dank! -->
				</bnb-paragraph>
				<bnb-button-cta
					version="primary"
					value="Jetzt mit Paypal Unterstützen"
					url="https://form.jotform.com/200975921001043"
					target="_blank"
					data-resources="[{paths: ['components/bnb-button-cta/index.js']}]"
				></bnb-button-cta>
			</div>
			<div class="contact__inputs">
				<bnb-headline level="3">Kontaktformular</bnb-headline>
				<bnb-contact-form></bnb-contact-form>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
