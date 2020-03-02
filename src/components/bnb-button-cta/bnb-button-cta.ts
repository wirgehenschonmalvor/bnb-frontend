import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbButtonCTAProps } from './defines';

class BnbButtonCTA extends Component<BnbButtonCTAProps> {
	public static componentName = 'bnb-button-cta';
	public static attributes = [
		'value',
		'url',
		'target',
		'version',
		{ name: 'tab-index', type: 'number' },
		{ name: 'disabled', type: 'boolean' },
	];

	protected readonly defaultProps: BnbButtonCTAProps = {
		value: '',
		url: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbButtonCTA;
