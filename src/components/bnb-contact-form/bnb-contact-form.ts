import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import BnbLink from '../bnb-link/bnb-link';
import BnbParagraph from '../bnb-paragraph/bnb-paragraph';

class BnbContactForm extends Component< null, null > {
  public static componentName = 'bnb-contact-form';

  public static dependencies = [
    BnbLink as typeof Component,
    BnbParagraph as typeof Component,
  ]

  public render(): HTMLFragment {
    return template();
  }
}

export default BnbContactForm;
