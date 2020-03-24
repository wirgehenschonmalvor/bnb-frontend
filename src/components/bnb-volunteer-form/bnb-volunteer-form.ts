import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';


class BnbVolunteerForm extends Component< null, null > {
  public static componentName = 'bnb-volunteer-form';
  public static attributes = [];

  public render(): HTMLFragment {
    return template();
  }
}

export default BnbVolunteerForm;
