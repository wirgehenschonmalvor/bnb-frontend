import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsStageProps } from './defines';

export const template = (data: BnbCmsStageProps): HTMLFragment => {
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
				<bnb-headline class="h1" level="1">
					<slot />
				</bnb-headline>
				<div class="stage-text-buttons">
					<bnb-icon id="icon-mobile" icon="${data.icon}"></bnb-icon>
					<div class="stage-text-buttons-mobile">
						<bnb-button-cta
							value="${data.buttonLeft.value}"
							url="${data.buttonLeft.url}"
							target="${data.buttonLeft.target}"
							version="${data.buttonLeft.version}"
						></bnb-button-cta>
						<bnb-button-cta
							value="${data.buttonRight.value}"
							url="${data.buttonRight.url}"
							target="${data.buttonRight.target}"
							version="${data.buttonRight.version}"
						></bnb-button-cta>
					</div>
				</div>
			</div>
			<div class="stage-text-container-right">
				<bnb-icon id="icon-desktop" icon="${data.icon}"></bnb-icon>
			</div>
		</div>
		${createStyle(styles)}
	`;
};
