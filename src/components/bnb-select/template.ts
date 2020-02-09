import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';
import classNames from 'classnames';
import { BnbSelectProps, BnbSelectState, Option } from './defines';

const createOptionElements = (options: Option[] = []) =>
	options.map(option => {
		const elem = document.createElement('option');

		if (option.value) {
			elem.setAttribute('value', option.value);
		}

		if (option.selected) {
			elem.setAttribute('selected', '');
		}

		if (option.disabled) {
			elem.setAttribute('disabled', '');
		}

		elem.innerHTML = option.content;

		return elem;
	});

export const template = (
	data: BnbSelectProps & BnbSelectState,
): HTMLFragment => {
	return html`
		<label for="${data.name}"
			>${data.label}${data.required ? '*' : ''}</label
		>
		<div class="select_wrapper">
			<select
				aria-label="${data.name}"
				name="${data.name}"
				id="${data.name}"
				form="${data.form}"
				disabled=${data.disabled}
				required=${data.required}
				multiple=${data.multiple}
			>
				${createOptionElements(data.options)};
			</select>
			${data.required
				? html`
						<bnb-error-message
							class="${classNames({ error: data.error })}"
							message="${data.errorMessage}"
						></bnb-error-message>
				  `
				: ''}
		</div>
		${createStyle(styles)}
	`;
};
