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
						url="aktiv-werden.html"
					></bnb-link>
					<!-- <bnb-link
						footer
						value=""
						url="candidates.html"
					></bnb-link> -->
					<bnb-link
						footer
						value="Über uns"
						url="ueber-uns.html"
					></bnb-link>
					<bnb-link
						footer
						value="Unsere Forderungen"
						url="unsere-forderungen.html"
					></bnb-link>
					<!-- <bnb-link footer value="" url="news.html"></bnb-link> -->
					<bnb-link
						footer
						url="faqs.html"
						value="FAQ"
					></bnb-link>
					<bnb-link
						footer
						value="Kontakt"
						url="kontakt.html"
					></bnb-link>
					<div class="footer-links--left-small">
						<bnb-link
							footer
							value="Impressum"
							url="impressum.html"
						></bnb-link>
						<bnb-link
							footer
							value="Datenschutz"
							url="datenschutz.html"
						></bnb-link>
					</div>
				</div>
				<div class="footer-links--middle">
				</div>
				<div class="footer-links--right">
					<bnb-paragraph class="headline">Folge uns:</bnb-paragraph>
					<bnb-follow color="footer"></bnb-follow>
					<bnb-button-cta
						version="footer"
						value="Spenden"
						url="kontakt.html"
					></bnb-button-cta>
					<bnb-icon icon="logo"></bnb-icon>
				</div>
			</div>
		</footer>
		${createStyle(styles)}
	`;
};
