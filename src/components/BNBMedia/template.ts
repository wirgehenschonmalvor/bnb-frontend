import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BNBMediaProps, BNBMediaState } from './defines';

export const template = (data: BNBMediaProps & BNBMediaState): HTMLFragment => {
	return html`
		<figure>
			<img src="${data.url}" alt="${data.alt}" />
			<figcaption>
				${data.caption}
			</figcaption>
			<video
				controls="${data.controls}"
				autoplay="${data.autoplay}"
				loop="${data.loop}"
				muted="${data.muted}"
				poster="${data.poster}"
			>
				<source
					src="https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_2mb.mp4"
				/>
			</video>
			<iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/${data.youtubeId}"
				frameborder="0"
				allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>

			<footer>${data.copyright}</footer>
		</figure>
		${createStyle(styles)}
	`;
};
