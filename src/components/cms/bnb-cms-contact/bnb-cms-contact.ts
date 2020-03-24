import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsContactProps, BnbCmsContactMethods } from './defines';
import BnbHeadline from '../../bnb-headline/bnb-headline';
import BnbParagraph from '../../bnb-paragraph/bnb-paragraph';
import BnbContactForm from '../../bnb-contact-form/bnb-contact-form';

class BnbCmsContact extends Component<BnbCmsContactProps, null> {
	public static componentName = 'bnb-cms-contact';
	public static attributes = [];

	public static dependencies = [
		BnbHeadline as typeof Component,
		BnbParagraph as typeof Component,
		BnbContactForm as typeof Component
	];

	protected readonly defaultProps: BnbCmsContactProps = {};

	public methods: BnbCmsContactMethods = {};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.methods });
	}
}

export default BnbCmsContact;
