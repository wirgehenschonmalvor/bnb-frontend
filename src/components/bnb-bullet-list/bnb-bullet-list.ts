import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbBulletListProps } from './defines';
import BnbHeadline from '../bnb-headline/bnb-headline';
import BnbBulletItem from '../bnb-bullet-item/bnb-bullet-item';

class BnbBulletList extends Component<BnbBulletListProps, null> {
	public static componentName = 'bnb-bullet-list';
	public static attributes = [];

	public static dependencies = [
		BnbBulletItem as typeof Component,
		BnbHeadline as typeof Component,
	];

	protected readonly defaultProps: BnbBulletListProps = {};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbBulletList;
