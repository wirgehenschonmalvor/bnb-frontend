import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCheckboxProps } from './defines';
import BnbLink from '../bnb-link/bnb-link';
import BnbParagraph from '../bnb-paragraph/bnb-paragraph';

class BnbCheckbox extends Component<BnbCheckboxProps, null> {
	public static componentName = 'bnb-checkbox';
	public static attributes = [
		'id',
		'label',
		{ name: 'checked', type: 'boolean' },
		{ name: 'required', type: 'boolean' },
		{ name: 'link', type: 'boolean' },
		{ name: 'tabindex', type: 'number' },
	];

	protected readonly defaultProps: BnbCheckboxProps = {
		id: '',
		label: '',
		checked: false,
	};

	public static dependencies = [
		BnbLink as typeof Component,
		BnbParagraph as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCheckbox;
