import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbAccordionProps } from './defines';
import BnbHeadline from '../bnb-headline/bnb-headline';
import BnbParagraph from '../bnb-paragraph/bnb-paragraph';
import BnbIcon from '../bnb-icon/bnb-icon';

class BnbAccordion extends Component<BnbAccordionProps, null> {
	public static componentName = 'bnb-accordion';
	public static attributes = ['label', 'id'];

	public static dependencies = [
		BnbHeadline as typeof Component,
		BnbParagraph as typeof Component,
		BnbIcon as typeof Component,
	];

	protected readonly defaultProps: BnbAccordionProps = {
		id: '',
		label: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbAccordion;
