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
						url="https://www.brendnewbundestag.de/volunteers"
					></bnb-link>
					<bnb-link
						footer
						value="Kandidat*Innen"
						url="https://www.brendnewbundestag.de/candidates"
					></bnb-link>
					<bnb-link
						footer
						value="Über uns"
						url="https://www.brendnewbundestag.de/about-us"
					></bnb-link>
					<bnb-link
						footer
						value="News"
						url="https://www.brendnewbundestag.de/news"
					></bnb-link>
				</div>
				<div class="footer-links--right">
					<bnb-link
						footer
						value="Presse"
						url="https://www.brendnewbundestag.de/press"
					></bnb-link>
					<bnb-link
						footer
						value="Kontakt"
						url="https://www.brendnewbundestag.de/contact"
					></bnb-link>
					<bnb-link
						footer
						value="Impressum"
						url="https://www.brendnewbundestag.de/imprint"
					></bnb-link>
					<bnb-link
						footer
						value="Datenschutz"
						url="https://www.brendnewbundestag.de/data-protection"
					></bnb-link>
				</div>
				<div class="footer-buttons">
					<bnb-button-cta
						version="footer"
						value="Newsletter abonnieren"
						url="#newsletter"
					></bnb-button-cta>
					<bnb-follow color="light"></bnb-follow>
				</div>
			</div>
			<div class="footer-icon">
				<bnb-icon icon="bildmarke"></bnb-icon>
			</div>
		</footer>
		${createStyle(styles)}
	`;
};
