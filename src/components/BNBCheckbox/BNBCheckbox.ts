import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BNBCheckboxProps } from './defines';

class BNBCheckbox extends Component<BNBCheckboxProps, null> {
	public static componentName = 'b-n-b-checkbox';
	public static attributes = ['id', 'label', { name: 'checked', type: 'boolean' }];

	protected readonly defaultProps: BNBCheckboxProps = {
		id: '',
		label: '',
		checked: false,
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BNBCheckbox;
