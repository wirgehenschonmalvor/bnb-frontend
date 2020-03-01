import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';
import { BnbOutdatedBrowserMethods } from './defines';

export const template = (
	data: BnbOutdatedBrowserMethods,
	refs,
): HTMLFragment => {
	return html`
		<section id="warning" ref=${refs.warning}>
			<a href="#" onclick=${data.onCloseClick} class="closeThis">✕</a>
			<section class="warningContent">
				<span>!</span>
				<h5 class="wHeading">aktualisiere deinen browser</h5>
				<p>
					Dein Browser ist <strong>veraltet</strong>!
					<a
						href="https://bestvpn.org/outdatedbrowser/de"
						target="_blank"
						>Upgrade</a
					>
					zu einem aktuellen Browser, um diese Seite zu verwenden.
				</p>
			</section>
		</section>
		${createStyle(styles)}
	`;
};
