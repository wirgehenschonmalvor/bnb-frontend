import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbYoutubeProps } from './defines';

export const template = (data: BnbYoutubeProps): HTMLFragment => {
	return html`
		<iframe
			src=${`https://www.youtube.com/embed/${data.youtubeId}?modestbranding=true&showinfo=false&rel=0`}
			frameborder="0"
			allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
		></iframe>
		${createStyle(styles)}
	`;
};
