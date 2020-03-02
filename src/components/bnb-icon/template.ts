import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';
import { BnbIconProps } from './defines';
import icons from './icons';

const getIconForName = (icon: string) => icons[icon] || '';

export const template = (data: BnbIconProps): HTMLFragment => {
	return html`
		${{ html: getIconForName(data.icon) }} ${createStyle(styles)}
	`;
};
