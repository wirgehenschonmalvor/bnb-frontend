import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsNewsletterFormProps } from './defines';

class BnbCmsNewsletterForm extends Component< BnbCmsNewsletterFormProps, null > {
  public static componentName = 'bnb-cms-newsletter-form';
  public static attributes = [];
  
  protected readonly defaultProps: BnbCmsNewsletterFormProps = {};

  public render(): HTMLFragment {
    return template( { ...this.props });
  }
}

export default BnbCmsNewsletterForm;
