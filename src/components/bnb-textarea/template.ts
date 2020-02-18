import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbTextareaProps } from './defines';

export const template = (data: BnbTextareaProps): HTMLFragment => {
	return html`
		<div class="input__wrapper">
			<textarea
				disabled="${data.disabled ? `true` : ''}"
				type="text"
				id="textarea${data.label}"
				aria-label="textarea${data.label}"
				tabindex="${data.tabindex}"
				placeholder="${data.placeholder}${data.required ? `*` : ''}"
			></textarea>
			<label for="textarea${data.label}">${data.label}</label>
		</div>
		${createStyle(styles)}
	`;
};
