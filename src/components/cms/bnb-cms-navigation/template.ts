import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsNavigationProps } from './defines';

export const template = (data: BnbCmsNavigationProps): HTMLFragment => {
	return html`
		<div class="navigation-wrapper">
			<nav role="navigation">
				<bnb-icon id="navigation-icon" icon="schriftzug"></bnb-icon>
				<div id="menuToggle">
					<input type="checkbox" />
					<span></span>
					<span></span>
					<span></span>
					<div id="menu-mobile">
						<bnb-icon
							id="overlay-icon"
							icon="schriftzug"
						></bnb-icon>
						<bnb-link
							header
							value="Aktiv werden"
							url="volunteers.html"
						></bnb-link>
						<bnb-link
							header
							value="Kandidat*Innen"
							url="candidates.html"
						></bnb-link>
						<bnb-link
							header
							value="Über uns"
							url="about-us.html"
						></bnb-link>
						<bnb-link
							header
							value="News"
							url="news.html"
						></bnb-link>
						<bnb-button-cta
							version="header"
							value="Mitmachen!"
							url="volunteers.html"
						></bnb-button-cta>
						<bnb-follow color="light"></bnb-follow>
					</div>
				</div>
				<div id="menu-desktop">
					<bnb-icon
						id="navigation-icon-desktop"
						icon="schriftzug"
					></bnb-icon>
					<div class="navigation-links">
						<bnb-link
							header
							value="Aktiv werden"
							url="volunteers.html"
						></bnb-link>
						<bnb-link
							header
							value="Kandidat*Innen"
							url="candidates.html"
						></bnb-link>
						<bnb-link
							header
							value="Über uns"
							url="about-us.html"
						></bnb-link>
						<bnb-link
							header
							value="News"
							url="news.html"
						></bnb-link>
					</div>
					<div class="navigation-buttons">
						<bnb-button-cta
							version="header"
							value="Mitmachen!"
							url="volunteers.html"
						></bnb-button-cta>
						<bnb-follow color="light"></bnb-follow>
					</div>
				</div>
			</nav>
		</div>
		${createStyle(styles)}
	`;
};
