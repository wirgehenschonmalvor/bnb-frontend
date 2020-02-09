import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCheckboxProps } from './defines';

export const template = (data: BnbCheckboxProps): HTMLFragment => {
	return html`
		<div class="input__wrapper">
			<input id="${data.id}" type="checkbox" aria-label="${data.label}" checked=${data.checked}/>
			<label for="${data.id}">${data.label}</label>
		</div>
		${createStyle(styles)}
	`;
};
