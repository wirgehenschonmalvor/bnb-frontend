import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as stylesh1 from './h1.scss';
import * as stylesh2 from './h2.scss';
import * as stylesh3 from './h3.scss';

import { BNBHeadlineProps } from './defines';

const createHeadlineElement = (level: number = 1, content: string = '') => {
  const headline = document.createElement(`h${level}`, {});
  headline.innerHTML = content;
  return headline;
};

const getStylesForLevel = (level: number = 1) => {
  const styles = {
    stylesh1,
    stylesh2,
    stylesh3,
  };

  return styles[`stylesh${level}`.toString()];
};

export const template = ( data: BNBHeadlineProps ): HTMLFragment => {
  return html`
    ${createHeadlineElement(data.level, '<slot/>')} ${createStyle(getStylesForLevel(data.level))}
  `;
}
