import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbListItemProps } from './defines';


export const template = ( data: BnbListItemProps ): HTMLFragment => {
  return html`
		${data.ordered
			? html`
          <span class="list-item-counter">
            ${
				data.counterPrefix
					? html`
							${data.counterPrefix}.${data.counterStart}
					  `
					: html`
                  ${data.counterStart}.
                </span>`
			}
        `
			: html`
					<bnb-icon icon="bullet"></bnb-icon>
			  `}
		<p>
			<slot />
		</p>
		${createStyle(styles)}
  `;
}
