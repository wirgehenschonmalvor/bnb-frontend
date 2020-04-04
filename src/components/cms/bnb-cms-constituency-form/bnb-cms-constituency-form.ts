import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import BnbConstituencyForm from '../../bnb-constituency-form/bnb-constituency-form';


class BnbCmsConstituencyForm extends Component< null, null > {
  public static componentName = 'bnb-cms-constituency-form';

  public static dependencies = [BnbConstituencyForm as typeof Component];

  public render(): HTMLFragment {
    return template();
  }
}

export default BnbCmsConstituencyForm;
