import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsYoutubeProps } from './defines';

export const template = (data: BnbCmsYoutubeProps): HTMLFragment => {
  return html`
  <div class="component-wrapper">
    <bnb-headline color="white" level="3">${data.heading}</bnb-headline>
  <div class="youtube-wrapper">
		<bnb-youtube
			youtubeId="${data.youtubeinfo.youtubeId}"
			thumbnail="${data.youtubeinfo.thumbnail}"
    ></bnb-youtube>
  </div>
  </div>
		${createStyle(styles)}
	`;
};
