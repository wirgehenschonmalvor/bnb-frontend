import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import BnbVolunteerForm from '../../bnb-volunteer-form/bnb-volunteer-form';

class BnbCmsVolunteerForm extends Component<null, null> {
	public static componentName = 'bnb-cms-volunteer-form';

	public static dependencies = [BnbVolunteerForm as typeof Component];

	public render(): HTMLFragment {
		return template();
	}
}

export default BnbCmsVolunteerForm;
