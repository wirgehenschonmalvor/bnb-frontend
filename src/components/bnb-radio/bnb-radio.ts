import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbRadioProps } from './defines';

class BnbRadio extends Component<BnbRadioProps, null> {
	public static componentName = 'bnb-radio';
	public static attributes = [
		'id',
		'label',
		{ name: 'checked', type: 'boolean' },
	];

	protected readonly defaultProps: BnbRadioProps = {
		id: '',
		label: '',
		checked: false,
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbRadio;
