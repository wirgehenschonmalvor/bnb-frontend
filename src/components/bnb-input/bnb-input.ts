import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbInputProps, BnbInputState } from './defines';
import BnbErrorMessage from '../bnb-error-message/bnb-error-message';

class BnbInput extends Component<BnbInputProps, BnbInputState> {
	public static componentName = 'bnb-input';
	static dependencies = [BnbErrorMessage as any];

	public static attributes = [
		'label',
		'placeholder',
		'type',
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
		type: 'text',
		label: '',
		placeholder: '',
		required: false,
		disabled: false,
	};

	unfocusInput() {
		const bodyElement = document.querySelector('body');
		const inputElements = document.querySelectorAll('input');

		bodyElement.addEventListener('click', () => {
			inputElements.forEach(element => {
				element.blur();
			});
		});
	}

	protected readonly defaultState: BnbInputState = {
		error: 'Default Error Message',
	};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state });
	}

	public ready() {
		this.unfocusInput();
	}
}

export default BnbInput;
