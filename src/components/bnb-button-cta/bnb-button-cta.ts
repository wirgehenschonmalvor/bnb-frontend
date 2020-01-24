import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import {
	BnbButtonCTAProps,
	BnbButtonCTAState,
	BnbButtonCTAMethods,
} from './defines';

class BnbButtonCTA extends Component<BnbButtonCTAProps, BnbButtonCTAState> {
	public static componentName = 'bnb-button-c-t-a';
	public static attributes = ['value', 'url', 'target'];

	protected readonly defaultProps: BnbButtonCTAProps = {
		value: '',
		url: '',
		target: '',
	};

	protected readonly defaultState: BnbButtonCTAState = {};

	public methods: BnbButtonCTAMethods = {};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

export default BnbButtonCTA;
