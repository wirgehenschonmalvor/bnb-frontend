import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsNavigationProps } from './defines';

export const template = (data: BnbCmsNavigationProps): HTMLFragment => {
	return html`
		<div class="navigation-wrapper">
			<nav role="navigation">
				<a
					href="index.html"
					id="navigation-icon-desktop-link"
					tabindex="0"
				>
					<bnb-icon id="navigation-icon" icon="schriftzug"></bnb-icon>
				</a>
				<div id="menuToggle">
					<input type="checkbox" />
					<span></span>
					<span></span>
					<span></span>
					<div id="menu-mobile">
						<a href="index.html">
							<bnb-icon
								id="overlay-icon"
								icon="schriftzug"
							></bnb-icon>
						</a>
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
					<a
						href="index.html"
						id="navigation-icon-desktop-link"
						tabindex="0"
					>
						<bnb-icon
							id="navigation-icon-desktop"
							icon="schriftzug"
						></bnb-icon>
					</a>
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
						<bnb-follow color="light"></bnb-follow>
						<bnb-button-cta
							version="header"
							value="Mitmachen!"
							url="volunteers.html"
						></bnb-button-cta>
					</div>
				</div>
			</nav>
		</div>
		${createStyle(styles)}
	`;
};
