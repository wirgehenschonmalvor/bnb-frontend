import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BNBMediaProps, BNBMediaState } from './defines';

export const template = (data: BNBMediaProps & BNBMediaState): HTMLFragment => {
	return html`
		<figure>
			${data.imageUrl
				? html`
						<img src="${data.imageUrl}" alt="${data.alt}" />
				  `
				: ''}
			${data.videoUrl
				? html`
						<video
							controls="${data.controls}"
							autoplay="${data.autoplay}"
							loop="${data.loop}"
							muted="${data.muted}"
							poster="${data.poster}"
						>
							<source src="${data.videoUrl}" />
						</video>
				  `
				: ''}
			${data.audioUrl
				? html`
						<audio
							controls="${data.controls}"
						>
							<source src="${data.audioUrl}" />
						</audio>
				  `
				: ''}
			${data.youtubeId
				? html`
						<iframe
							width="560"
							height="315"
							src="https://www.youtube.com/embed/${data.youtubeId}"
							frameborder="0"
							allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
							allowfullscreen
						></iframe>
				  `
				: ''}
			<figcaption>
				${data.caption}
			</figcaption>
			<footer>${data.copyright}</footer>
		</figure>
		${createStyle(styles)}
	`;
};
