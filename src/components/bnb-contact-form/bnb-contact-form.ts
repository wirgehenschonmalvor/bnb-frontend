import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';

class BnbContactForm extends Component< null, null > {
  public static componentName = 'bnb-contact-form';

  public render(): HTMLFragment {
    return template();
  }
}

export default BnbContactForm;
