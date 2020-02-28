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
						url="get-started.html"
					></bnb-link>
					<!-- <bnb-link
						footer
						value=""
						url="candidates.html"
					></bnb-link> -->
					<bnb-link
						footer
						value="Über uns"
						url="about-us.html"
					></bnb-link>
					<bnb-link footer value="Unsere Forderungen" url="claims.html"></bnb-link>
					<!-- <bnb-link footer value="" url="news.html"></bnb-link> -->
					<bnb-link
						footer
						value="Häufige Fragen/FAQs"
						url="faqs.html"
					></bnb-link>
					<bnb-link
						footer
						value="Kontakt"
						url="contact.html"
					></bnb-link>
					<div class="footer-links--left-small">
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
				</div>
				<div class="footer-links--middle">
					<bnb-paragraph class="headline"
						>So erreichst du uns:</bnb-paragraph
					>
					<bnb-paragraph class="contact">
						Brand New Bundestag e.V. <br />
						Musterstrasse 12 <br />1000 Berlin <br />
						<bnb-link
							footer
							value="team@brandnewbundestag.de"
							url="mailto:team@brandnewbundestag.de"
						></bnb-link>
					</bnb-paragraph>
				</div>
				<div class="footer-links--right">
					<bnb-paragraph class="headline">Folge uns:</bnb-paragraph>
					<bnb-follow color="footer"></bnb-follow>
					<bnb-button-cta
						version="footer"
						value="Spenden"
						url="#"
					></bnb-button-cta>
					<bnb-icon icon="bildmarke"></bnb-icon>
				</div>
			</div>
		</footer>
		${createStyle(styles)}
	`;
};
