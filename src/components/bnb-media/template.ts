import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbMediaProps } from './defines';

export const template = (data: BnbMediaProps): HTMLFragment => {
	return html`
		${data.imageInfo
			? html`
					<figure>
						<bnb-image
							src="${data.imageInfo.src}"
							title=${data.imageInfo.title}
							object-fit=${data.imageInfo.objectFit}
							object-position=${data.imageInfo.objectPosition}
							srcset="${data.imageInfo.srcset}"
							sizes="${data.imageInfo.sizes}"
						></bnb-image>
						<footer>${data.copyright}</footer>
						${data.caption
							? html`
									<figcaption>${data.caption}</figcaption>
							  `
							: ''}
					</figure>
			  `
			: ''}
		${data.youtubeInfo
			? html`
					<figure>
						<bnb-youtube
							youtube-id="${data.youtubeInfo.youtubeId}"
						></bnb-youtube>
						${data.caption
							? html`
									<figcaption>${data.caption}</figcaption>
							  `
							: ''}
					</figure>
			  `
			: ''}
		${data.videoInfo
			? html`
					<figure>
						<bnb-video
							video-url="${data.videoInfo.videoUrl}"
							loop=${data.videoInfo.loop}
							autoplay=${data.videoInfo.autoplay}
							muted=${data.videoInfo.muted}
							controls=${data.videoInfo.controls}
						></bnb-video>
						<footer>${data.copyright}</footer>
						${data.caption
							? html`
									<figcaption>${data.caption}</figcaption>
							  `
							: ''}
					</figure>
			  `
			: ''}
		${createStyle(styles)}
	`;
};
