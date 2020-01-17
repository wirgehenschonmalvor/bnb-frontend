import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BNBInputProps, BNBInputState } from './defines';
import BNBErrorMessage from '../BNBErrorMessage/BNBErrorMessage';

class BNBInput extends Component<BNBInputProps, BNBInputState> {
	public static componentName = 'b-n-b-input';
	static dependencies = [BNBErrorMessage as any];

	public static attributes = [
		'label',
		{
			name: 'required',
			type: 'boolean',
		},
		{
			name: 'disabled',
			type: 'boolean',
		},
	];

	protected readonly defaultProps: BNBInputProps = {
		label: '',
		required: false,
		disabled: false,
	};

	protected readonly defaultState: BNBInputState = {
		error: 'Default Error Message',
	};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state });
	}
}

export default BNBInput;
