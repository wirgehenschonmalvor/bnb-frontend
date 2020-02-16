import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsContactProps, BnbCmsContactMethods } from './defines';
import BnbHeadline from '../../bnb-headline/bnb-headline';
import BnbInput from '../../bnb-input/bnb-input';
import BnbCheckbox from '../../bnb-checkbox/bnb-checkbox';
import BnbButtonCTA from '../../bnb-button-cta/bnb-button-cta';
import BnbParagraph from '../../bnb-paragraph/bnb-paragraph';
import BnbTextarea from '../../bnb-textarea/bnb-textarea';

class BnbCmsContact extends Component<BnbCmsContactProps, null> {
	public static componentName = 'bnb-cms-contact';
	public static attributes = [];

	public static dependencies = [
		BnbHeadline as typeof Component,
		BnbInput as typeof Component,
		BnbCheckbox as typeof Component,
		BnbButtonCTA as typeof Component,
		BnbParagraph as typeof Component,
		BnbTextarea as typeof Component,
	];

	protected readonly defaultProps: BnbCmsContactProps = {};

	public methods: BnbCmsContactMethods = {};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.methods });
	}
}

export default BnbCmsContact;
