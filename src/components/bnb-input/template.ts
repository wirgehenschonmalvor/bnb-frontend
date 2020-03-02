import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbInputProps, BnbInputState } from './defines';

export const template = (data: BnbInputProps & BnbInputState): HTMLFragment => {
	return html`
		<div class="input__wrapper">
			<input
				disabled="${data.disabled ? `true` : ''}"
				type="${data.type}"
				id="input${data.label}"
				aria-label="input${data.label}"
				placeholder="${data.placeholder}${data.required ? `*` : ''}"
			/>
			<label for="input${data.label}">${data.label}</label>
		</div>
		${createStyle(styles)}
	`;
};
