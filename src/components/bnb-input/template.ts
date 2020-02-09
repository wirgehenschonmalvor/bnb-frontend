import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbInputProps, BnbInputState } from './defines';

export const template = (data: BnbInputProps & BnbInputState): HTMLFragment => {
	return html`
		<div class="input__wrapper">
			<input
				disabled="${data.disabled ? `true` : ''}"
				type="text"
				id="input${data.label}"
				aria-label="input${data.label}"
				placeholder="${data.placeholder}"
			/>
			<label for="input${data.label}"
				>${data.label}${data.required ? `*` : ''}</label
			>
		</div>
		${data.required
			? html`
					<bnb-error-message
						message="${data.error}"
					></bnb-error-message>
			  `
			: ''}
		${createStyle(styles)}
	`;
};
