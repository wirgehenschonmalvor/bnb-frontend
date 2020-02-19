import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsFooterProps } from './defines';

export const template = (data: BnbCmsFooterProps): HTMLFragment => {
	return html`
		<footer class="footer-background">
			<div class="footer-wrapper">
				<div class="footer-links--left">
					<bnb-link
						footer
						value="Aktiv werden"
						url="volunteers.html"
					></bnb-link>
					<bnb-link
						footer
						value="Kandidat*Innen"
						url="candidates.html"
					></bnb-link>
					<bnb-link
						footer
						value="Über uns"
						url="about-us.html"
					></bnb-link>
					<bnb-link footer value="News" url="news.html"></bnb-link>
				</div>
				<div class="footer-links--right">
					<bnb-link footer value="Presse" url="press.html"></bnb-link>
					<bnb-link
						footer
						value="Kontakt"
						url="contact.html"
					></bnb-link>
					<bnb-link
						footer
						value="Impressum"
						url="imprint.html"
					></bnb-link>
					<bnb-link
						footer
						value="Datenschutz"
						url="data-protection.html"
					></bnb-link>
				</div>
				<div class="footer-buttons">
					<bnb-button-cta
						version="footer"
						value="Newsletter abonnieren"
						url="#newsletter"
					></bnb-button-cta>
					<bnb-follow color="footer"></bnb-follow>
				</div>
			</div>
			<div class="footer-icon">
				<bnb-icon icon="bildmarke"></bnb-icon>
			</div>
		</footer>
		${createStyle(styles)}
	`;
};
