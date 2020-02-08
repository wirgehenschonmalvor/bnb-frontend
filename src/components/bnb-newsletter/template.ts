import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbNewsletterProps } from './defines';


export const template = ( data: BnbNewsletterProps ): HTMLFragment => {
  return html`
    <slot/>
    ${createStyle(styles)}
  `;
}
