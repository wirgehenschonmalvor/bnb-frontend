import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCheckboxProps } from './defines';

class BnbCheckbox extends Component<BnbCheckboxProps, null> {
	public static componentName = 'bnb-checkbox';
	public static attributes = ['id', 'label', { name: 'checked', type: 'boolean' }];

	protected readonly defaultProps: BnbCheckboxProps = {
		id: '',
		label: '',
		checked: false,
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCheckbox;
