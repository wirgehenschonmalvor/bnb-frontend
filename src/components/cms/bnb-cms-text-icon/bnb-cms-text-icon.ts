import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsTextIconProps } from './defines';
import BnbIcon from '../../bnb-icon/bnb-icon';

class BnbCmsTextIcon extends Component<BnbCmsTextIconProps, null> {
	public static componentName = 'bnb-cms-text-icon';
	public static attributes = [];

	static dependencies = [BnbIcon as typeof Component];
	protected readonly defaultProps: BnbCmsTextIconProps = {};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsTextIcon;
