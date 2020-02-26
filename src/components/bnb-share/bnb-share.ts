import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbShareProps } from './defines';
import BnbIcon from '../bnb-icon/bnb-icon';

class BnbShare extends Component<BnbShareProps, null> {
	public static componentName = 'bnb-share';
	public static attributes = ['url'];

	public static dependencies = [BnbIcon as typeof Component];

	protected readonly defaultProps: BnbShareProps = {
		url: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbShare;
