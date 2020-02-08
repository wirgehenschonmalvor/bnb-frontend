import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbNewsletterProps } from './defines';

class BnbNewsletter extends Component< BnbNewsletterProps, null > {
  public static componentName = 'bnb-newsletter';
  public static attributes = [];
  
  protected readonly defaultProps: BnbNewsletterProps = {};

  public render(): HTMLFragment {
    return template( { ...this.props });
  }
}

export default BnbNewsletter;
