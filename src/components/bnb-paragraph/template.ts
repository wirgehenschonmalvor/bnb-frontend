import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';
import { BnbParagraphProps } from './defines';
import classNames from 'classnames';

export const template = (data: BnbParagraphProps): HTMLFragment => {
	return html`
		<p
			class="${classNames(
				{ leadtext: data.leadtext },
				{ capitalize: data.capitalize },
				{ infotext: data.infotext },
				{ secondary: data.secondary },
			)}"
		>
			<slot />
		</p>
		${createStyle(styles)}
	`;
};
