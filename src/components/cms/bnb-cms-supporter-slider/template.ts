import { html, createStyle, HTMLFragment } from '@biotope/element';
import * as styles from './styles.scss';

import { BnbCmsSupporterSliderProps, BnbCmsSupporterSliderMethods, } from './defines';


export const template = ( data: BnbCmsSupporterSliderProps & BnbCmsSupporterSliderMethods ): HTMLFragment => {
  return html`
  <!-- <script src="../../../resources/js/lickity.pkgd.min.js"></script> -->
  <bnb-headline level="3">${data.heading}</bnb-headline>
  <div class="main-carousel">
    <button class="prev">prev</button>
    <!-- <div class="main-carousel js-flickity" data-flickity='{ "cellAlign": "left", "contain": true, "wrapAround": true }'> -->
      <!-- <div class="slider-wrapper js-flickity"> -->
        <button onclick="${data.onbuttonclick}" class="next">next</button>
    <slot/>
  </div>
    ${createStyle(styles)}
  `;
}
