import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCheckboxProps } from './defines';

export const template = (data: BnbCheckboxProps): HTMLFragment => {
	return html`
		<div class="input__wrapper">
			<input
				required=${data.required}
				id="${data.id}"
				type="checkbox"
				aria-label="${data.label}"
				checked=${data.checked}
			/>
			<label for="${data.id}">
				${data.link
					? html`
							<slot />
					  `
					: html`
							<bnb-paragraph>
								${data.label}${data.required
									? html`
											*
									  `
									: ''}
							</bnb-paragraph>
					  `}
			</label>
		</div>
		${createStyle(styles)}
	`;
};
