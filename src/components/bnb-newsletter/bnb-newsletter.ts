import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbNewsletterProps } from './defines';
import BnbInput from '../bnb-input/bnb-input';
import BnbHeadline from '../bnb-headline/bnb-headline';
import BnbCheckbox from '../bnb-checkbox/bnb-checkbox';
import BnbButtonCTA from '../bnb-button-cta/bnb-button-cta';
import BnbParagraph from '../bnb-paragraph/bnb-paragraph';

class BnbNewsletter extends Component<BnbNewsletterProps, null> {
	public static componentName = 'bnb-newsletter';
	public static attributes = [];

	protected readonly defaultProps: BnbNewsletterProps = {};

	public static dependencies = [
		BnbInput as typeof Component,
		BnbHeadline as typeof Component,
		BnbCheckbox as typeof Component,
    BnbButtonCTA as typeof Component,
    BnbParagraph as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbNewsletter;
