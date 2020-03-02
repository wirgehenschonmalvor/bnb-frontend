import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsInfoBoxProps } from './defines';
import BnbBulletList from '../../bnb-bullet-list/bnb-bullet-list';
import BnbHeadline from '../../bnb-headline/bnb-headline';

class BnbCmsInfoBox extends Component<BnbCmsInfoBoxProps, null> {
	public static componentName = 'bnb-cms-info-box';
	public static attributes = ['heading'];

	public static dependencies = [
		BnbBulletList as typeof Component,
		BnbHeadline as typeof Component,
	];

	protected readonly defaultProps: BnbCmsInfoBoxProps = {
		heading: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsInfoBox;
