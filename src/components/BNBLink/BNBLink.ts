import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BNBLinkProps, BNBLinkState, BNBLinkMethods } from './defines';

class BNBLink extends Component<BNBLinkProps, BNBLinkState> {
	public static componentName = 'b-n-b-link';
	public static attributes = ['value', 'url', 'target'];

	protected readonly defaultProps: BNBLinkProps = {
		value: '',
		url: '',
		target: '',
	};

	protected readonly defaultState: BNBLinkState = {};

	public methods: BNBLinkMethods = {};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.state, ...this.methods });
	}
}

export default BNBLink;
