import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsSubStageProps } from './defines';


export const template = ( data: BnbCmsSubStageProps ): HTMLFragment => {
  return html`
		<bnb-image
			srcset="${data.image.srcset}"
			sizes="${data.image.sizes}"
			src="${data.image.src}"
			title="${data.image.title}"
			object-fit="${data.image.objectFit}"
			object-position="${data.image.objectPosition}"
		></bnb-image>
		<div class="stage-text-container">
			<div class="stage-text-container-left">
				<bnb-headline level="3">${data.heading}</bnb-headline>
				<bnb-headline class="h2" level="2">
					<slot />
				</bnb-headline>
				<div class="stage-text-paragraph">
          <slot name="text" />
				</div>
			</div>
		</div>
		${createStyle(styles)}
  `;
}
