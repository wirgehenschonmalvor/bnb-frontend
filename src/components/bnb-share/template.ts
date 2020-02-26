import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbShareProps } from './defines';

export const template = (data: BnbShareProps): HTMLFragment => {
	return html`
		<div class="link-wrapper">
			<a
				href="https://www.facebook.com/sharer/sharer.php?u=${data.url}"
				target="_blank"
				rel="noopener"
			></a>
			<bnb-icon icon="facebook"> </bnb-icon>
		</div>
		<div class="link-wrapper">
			<a
				href="https://twitter.com/intent/tweet?tw_p=tweetbutton&amp;url=${data.url}"
				target="_blank"
				rel="noopener"
			></a>
			<bnb-icon icon="twitter"> </bnb-icon>
		</div>
		<div class="link-wrapper">
			<a
				href="https://www.linkedin.com/shareArticle?mini=true&url=${data.url}&title=&summary=Beispieltext&source="
				target="_blank"
				rel="noopener"
			></a>
			<bnb-icon icon="linkedin"> </bnb-icon>
		</div>
		${createStyle(styles)}
	`;
};
