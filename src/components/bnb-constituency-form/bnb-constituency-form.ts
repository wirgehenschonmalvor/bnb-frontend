import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';


class BnbConstituencyForm extends Component< null, null > {
  public static componentName = 'bnb-constituency-form';

  public render(): HTMLFragment {
    return template();
  }
}

export default BnbConstituencyForm;
