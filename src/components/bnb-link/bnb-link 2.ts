import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbLinkProps, BnbLinkState, BnbLinkMethods } from './defines';

class BnbLink extends Component<BnbLinkProps, BnbLinkState> {
	public static componentName = 'bnb-link';
	public static attributes = ['value', 'url', 'target'];

	protected readonly defaultProps: BnbLinkProps = {
		value: '',
		url: '',
		target: '',
	};

	protected readonly defaultState: BnbLinkState = {};

	public methods: BnbLinkMethods = {};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

export default BnbLink;
