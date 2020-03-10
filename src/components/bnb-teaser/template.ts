import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbTeaserProps } from './defines';

export const template = (data: BnbTeaserProps): HTMLFragment => {
	return html`
			<div class="component-wrapper">
				<bnb-headline color=white level="3">${data.heading}</bnb-headline>
				<div class="text">
          <bnb-headline color=white level="1">
            <slot />
        </bnb-headline>
					<bnb-button-cta
						version="teaser"
						value="${data.button.value}"
						url="${data.button.url}"
						disabled=${data.button.disabled}
					>
					</bnb-button-cta>
				</div>
			</div>
		${createStyle(styles)}
	`;
};
