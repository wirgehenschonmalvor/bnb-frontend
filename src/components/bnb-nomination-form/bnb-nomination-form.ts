import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import BnbNominationFormMethods from './defines';


class BnbNominationForm extends Component< null, BnbNominationFormMethods > {
  public static componentName = 'bnb-nomination-form';
  public static attributes = [];

  public methods: BnbNominationFormMethods = {
    setIframeHeight: () => {
      let iframe = this.shadowRoot.querySelector("iframe");
      console.log(iframe);
    }
  };

  public render(): HTMLFragment {
    return template({ ...this.methods });
  }
}

export default BnbNominationForm;
