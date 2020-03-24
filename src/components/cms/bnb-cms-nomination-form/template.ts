import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';


export const template = (): HTMLFragment => {
  return html`
    <bnb-nomination-form></bnb-nomination-form>
    ${createStyle(styles)}
  `;
}
