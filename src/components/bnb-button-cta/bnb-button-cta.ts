import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbButtonCTAProps } from './defines';

class BnbButtonCTA extends Component<BnbButtonCTAProps> {
	public static componentName = 'bnb-button-cta';
	public static attributes = ['value', 'url', 'target'];

	protected readonly defaultProps: BnbButtonCTAProps = {
		value: '',
		url: '',
		target: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbButtonCTA;
