import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbListProps } from './defines';
import BnbListItem from '../bnb-list-item/bnb-list-item';
import BnbHeadline from '../bnb-headline/bnb-headline';

class BnbList extends Component<BnbListProps, null> {
	public static componentName = 'bnb-list';
	public static attributes = [
		{
			name: 'ordered',
			type: 'boolen',
		},
	];

	public static dependencies = [
		BnbListItem as typeof Component,
		BnbHeadline as typeof Component,
	];

	protected readonly defaultProps: BnbListProps = {};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbList;
