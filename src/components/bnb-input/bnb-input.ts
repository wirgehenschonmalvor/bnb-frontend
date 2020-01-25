import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbInputProps, BnbInputState } from './defines';
import BnbErrorMessage from '../bnb-error-message/bnb-error-message';

class BnbInput extends Component<BnbInputProps, BnbInputState> {
	public static componentName = 'bnb-input';
	static dependencies = [BnbErrorMessage as any];

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

	protected readonly defaultProps: BnbInputProps = {
		label: '',
		required: false,
		disabled: false,
	};

	protected readonly defaultState: BnbInputState = {
		error: 'Default Error Message',
	};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state });
	}
}

export default BnbInput;
