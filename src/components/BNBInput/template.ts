import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BNBInputProps, BNBInputState } from './defines';

export const template = (data: BNBInputProps & BNBInputState): HTMLFragment => {
	return html`
		<div class="input__wrapper">
			<input
				disabled="${data.disabled ? `true` : ''}"
				type="text"
				id="input${data.label}"
				aria-label="input${data.label}"
			/>
			<label for="input${data.label}"
				>${data.label}${data.required ? `*` : ''}</label
			>
		</div>
		<b-n-b-error-message message="${data.error}"></b-n-b-error-message>
		${createStyle(styles)}
	`;
};
