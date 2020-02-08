import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsNewsletterFormProps } from './defines';


export const template = ( data: BnbCmsNewsletterFormProps ): HTMLFragment => {
  return html`
    <slot/>
    ${createStyle(styles)}
  `;
}
