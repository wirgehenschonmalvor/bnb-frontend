import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbLinkProps } from './defines';
import BnbIcon from '../bnb-icon/bnb-icon';

class BnbLink extends Component<BnbLinkProps, null> {
	public static componentName = 'bnb-link';
	public static attributes = [
		'value',
		'url',
		'target',
		{ name: 'external', type: 'boolean' },
	];

	protected readonly defaultProps: BnbLinkProps = {
		value: '',
		url: '',
		target: '',
	};

	public static dependencies = [BnbIcon as typeof Component]

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbLink;
