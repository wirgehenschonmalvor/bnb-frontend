import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbVideoProps } from './defines';

export const template = (data: BnbVideoProps): HTMLFragment => {
	return html`
		<video
			controls=${data.controls}
			autoplay=${data.autoplay}
			loop=${data.loop}
			muted=${data.muted}
		>
			<source src="${data.videoUrl}" />
		</video>
		${createStyle(styles)}
	`;
};
