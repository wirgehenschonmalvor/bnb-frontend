import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbListItemProps } from './defines';

class BnbListItem extends Component<BnbListItemProps, null> {
	public static componentName = 'bnb-list-item';
	public static attributes = [
		{
			name: 'ordered',
			type: 'boolen',
		},
	];

	protected readonly defaultProps: BnbListItemProps = {};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbListItem;
