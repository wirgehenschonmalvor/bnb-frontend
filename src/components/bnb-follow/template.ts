import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

export const template = (): HTMLFragment => {
	return html`
		<div class="link-wrapper">
			<a
				href="https://www.facebook.com/BrandNewBundestag/"
				target="_blank"
				rel="noopener"
			></a>
			<bnb-icon icon="facebookSmall"> </bnb-icon>
		</div>
		<div class="link-wrapper">
			<a
				href="https://twitter.com/brandnewBT?ref_src=twsrc%5Etfw"
				target="_blank"
				rel="noopener"
			></a>
			<bnb-icon icon="twitterSmall"> </bnb-icon>
		</div>
		<div class="link-wrapper">
			<a href="https://google.com" target="_blank" rel="noopener"></a>
			<bnb-icon icon="instagramSmall"> </bnb-icon>
		</div>
		${createStyle(styles)}
	`;
};
