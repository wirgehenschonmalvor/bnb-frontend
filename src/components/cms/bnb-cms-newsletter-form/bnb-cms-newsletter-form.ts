import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsNewsletterFormProps } from './defines';
import BnbNewsletter from '../../bnb-newsletter/bnb-newsletter';
import BnbFollow from '../../bnb-follow/bnb-follow';

class BnbCmsNewsletterForm extends Component<BnbCmsNewsletterFormProps, null> {
	public static componentName = 'bnb-cms-newsletter-form';
	public static attributes = [];

	protected readonly defaultProps: BnbCmsNewsletterFormProps = {};

	public static dependencies = [
		BnbNewsletter as typeof Component,
		BnbFollow as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsNewsletterForm;
