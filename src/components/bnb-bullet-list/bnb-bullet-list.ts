import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbBulletListProps } from './defines';

class BnbBulletList extends Component<BnbBulletListProps, null> {
	public static componentName = 'bnb-bullet-list';
	public static attributes = [];

	protected readonly defaultProps: BnbBulletListProps = {};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbBulletList;
