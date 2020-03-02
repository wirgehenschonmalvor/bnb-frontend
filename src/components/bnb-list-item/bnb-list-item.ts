import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbListItemProps } from './defines';
import BnbLink from '../bnb-link/bnb-link';
import BnbIcon from '../bnb-icon/bnb-icon';

class BnbListItem extends Component<BnbListItemProps, null> {
	public static componentName = 'bnb-list-item';
	public static attributes = [
		'counter-start',
		'counter-prefix',
		{
			name: 'ordered',
			type: 'boolean',
		},
	];

	public static dependencies = [
		BnbLink as typeof Component,
		BnbIcon as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbListItem;
