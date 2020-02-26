import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbYoutubeProps, BnBYoutubeMethods } from './defines';

export const template = (
	data: BnbYoutubeProps & BnBYoutubeMethods,
	refs,
): HTMLFragment => {
	return html`
		<div class="youtube-wrapper">
			${data.thumbnail
				? html`
					${createStyle(`
        :host img {
          object-fit: ${data.thumbnail.objectFit};
          object-position: ${data.thumbnail.objectPosition};
		}`)}
				<div class="thumbnail-wrapper">
					<img
						ref=${refs.thumbnail}
						src="${data.thumbnail.src}"
						srcset="${data.thumbnail.srcset}"
						sizes="${data.thumbnail.sizes}"
						alt="${data.thumbnail.title}"
					/>
					<bnb-icon
					ref=${refs.button} onclick=${data.onButtonClick}
						 icon="play">
						</bnb-icon>
				</div>
					`
					  : ''}
			<iframe
				ref=${refs.video}
				src=${`https://www.youtube.com/embed/${data.youtubeId}?modestbranding=true&showinfo=false&rel=0`}
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
		</div>
		${createStyle(styles)}
	`;
};
