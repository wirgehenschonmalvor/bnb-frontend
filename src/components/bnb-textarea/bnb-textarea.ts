import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbTextareaProps } from './defines';

class BnbTextarea extends Component<BnbTextareaProps, null> {
	public static componentName = 'bnb-textarea';
	public static attributes = [
		'label',
		'placeholder',
		{
			name: 'required',
			type: 'boolean',
		},
		{
			name: 'disabled',
			type: 'boolean',
		},
		,
		{ name: 'tabindex', type: 'number' },
	];

	protected readonly defaultProps: BnbTextareaProps = {
		label: '',
		placeholder: '',
		required: false,
		disabled: false,
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbTextarea;
