import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbContactFormProps, BnbContactFormMethods } from './defines';

class BnbContactForm extends Component< BnbContactFormProps, null > {
  public static componentName = 'bnb-contact-form';
  public static attributes = [];
  
  protected readonly defaultProps: BnbContactFormProps = {};

  public methods: BnbContactFormMethods = {};

  public render(): HTMLFragment {
    return template( { ...this.props, ...this.methods });
  }
}

export default BnbContactForm;
