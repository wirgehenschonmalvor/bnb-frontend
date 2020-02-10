import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbIconProps } from './defines';

class BnbIcon extends Component<BnbIconProps, null> {
	public static componentName = 'bnb-icon';
	public static attributes = ['icon'];

	protected readonly defaultProps: BnbIconProps = {
		icon: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbIcon;
