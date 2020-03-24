import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import BnbNominationForm from '../../bnb-nomination-form/bnb-nomination-form';

class BnbCmsNominationForm extends Component<null, null> {
	public static componentName = 'bnb-cms-nomination-form';

	public static dependencies = [BnbNominationForm as typeof Component];

	public render(): HTMLFragment {
		return template();
	}
}

export default BnbCmsNominationForm;
