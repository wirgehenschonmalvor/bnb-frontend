import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbListProps, BnbListMethods } from './defines';
import BnbListItem from '../bnb-list-item/bnb-list-item';
import BnbHeadline from '../bnb-headline/bnb-headline';

class BnbList extends Component<BnbListProps, null> {
	public static componentName = 'bnb-list';
	public static attributes = ['counter-start', 'counter-prefix'];

	public static dependencies = [
		BnbListItem as typeof Component,
		BnbHeadline as typeof Component,
	];

	protected readonly defaultProps: BnbListProps = {};

	public methods: BnbListMethods = {
		setCounterPrefix: counterPrefix => {
			let listItems = this.querySelectorAll('bnb-list-item');
			if (counterPrefix) {
				listItems.forEach(listItem => {
					listItem.setAttribute(
						'counter-prefix',
						counterPrefix + '.',
					);
				});
				let paragraph = this.querySelector('bnb-paragraph');
				let headline = this.querySelector('bnb-headline');
				let firstChildElement = this.firstElementChild;
				console.log(firstChildElement);
				if (paragraph || headline) {
					firstChildElement.firstChild.before(counterPrefix + '. ');
				}
			}
		},
		setCounterStart: counterStart => {
			if (counterStart) {
				this.style.counterReset = 'item ' + (counterStart - 1);
			} else {
				this.style.counterReset = 'item';
			}
		},
	};

	public render(): HTMLFragment {
		return template({ ...this.props, ...this.methods });
	}
}

export default BnbList;
