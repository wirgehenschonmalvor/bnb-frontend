import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbSelectProps, BnbSelectState } from './defines';
import BnbErrorMessage from '../bnb-error-message/bnb-error-message';

class BnbSelect extends Component<BnbSelectProps, BnbSelectState> {
	public static componentName = 'bnb-select';
	public static attributes = [
		'label',
		'name',
		'form',
		'error-message',
		{
			name: 'error',
			type: 'boolean',
		},
		{
			name: 'multiple',
			type: 'boolean',
		},
		{
			name: 'disabled',
			type: 'boolean',
		},
		{
			name: 'required',
			type: 'boolean',
		},
		{ name: 'options', type: 'array' },
	];

	public static dependencies = [BnbErrorMessage as typeof Component];

	protected readonly defaultProps: BnbSelectProps = {
		label: '',
		name: '',
		options: [],
	};

	protected readonly defaultState: BnbSelectState = {};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state });
	}
}

export default BnbSelect;
