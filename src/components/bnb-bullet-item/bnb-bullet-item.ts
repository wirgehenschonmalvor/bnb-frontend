import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbBulletItemProps } from './defines';
import BnbIcon from '../bnb-icon/bnb-icon';
import BnbParagraph from '../bnb-paragraph/bnb-paragraph';

class BnbBulletItem extends Component<BnbBulletItemProps, null> {
	public static componentName = 'bnb-bullet-item';
	public static attributes = ['icon'];

	static dependencies = [BnbIcon as typeof Component, BnbParagraph as typeof Component];

	protected readonly defaultProps: BnbBulletItemProps = {
		icon: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbBulletItem;
