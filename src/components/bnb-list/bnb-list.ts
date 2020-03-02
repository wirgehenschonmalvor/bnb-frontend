import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbListProps } from './defines';
import BnbListItem from '../bnb-list-item/bnb-list-item';
import BnbHeadline from '../bnb-headline/bnb-headline';

class BnbList extends Component<BnbListProps, null> {
	public static componentName = 'bnb-list';
	public static attributes = [
		'counter-start',
		'counter-prefix',
		{
			name: 'ordered',
			type: 'boolean',
		},
	];

	public static dependencies = [
		BnbListItem as typeof Component,
		BnbHeadline as typeof Component,
	];

	protected readonly defaultProps: BnbListProps = {
		counterStart: 1,
	};

	setCounterPrefix(counterPrefix) {
		if (counterPrefix) {
			const listHeadline = this.querySelector('bnb-headline');
			if (listHeadline) {
				listHeadline.firstChild.before(counterPrefix + '. ');
			}
		}
	}

	setCounterStart(counterStart, counterPrefix, ordered) {
		if (this.hasAttribute('ordered')) {
			let items = this.querySelectorAll('bnb-list-item');
			if (counterPrefix) {
				items.forEach(item => {
					item.setAttribute('counter-prefix', counterPrefix);
					item.setAttribute('counter-start', counterStart);
					item.setAttribute('ordered', ordered);
					counterStart++;
				});
			} else {
				items.forEach(item => {
					item.setAttribute('counter-start', counterStart);
					item.setAttribute('ordered', ordered);
					counterStart++;
				});
			}
		}
	}

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
	public ready() {
		this.setCounterPrefix(this.props.counterPrefix);
		this.setCounterStart(
			this.props.counterStart,
			this.props.counterPrefix,
			this.props.ordered,
		);
	}
}

export default BnbList;
