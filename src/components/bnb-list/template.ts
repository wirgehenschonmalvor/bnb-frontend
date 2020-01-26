import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';
import { BnbListProps, BnbListMethods } from './defines';

export const template = (data: BnbListProps & BnbListMethods): HTMLFragment => {
	return html`
		<slot />
		${createStyle(styles)} ${data.setCounterPrefix(data.counterPrefix)}
		${data.setCounterStart(data.counterStart)}
	`;
};
