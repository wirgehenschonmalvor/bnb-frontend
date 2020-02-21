import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsPartnerProps } from './defines';
import BnbHeadline from '../../bnb-headline/bnb-headline';
import BnbIcon from '../../bnb-icon/bnb-icon';

class BnbCmsPartner extends Component<BnbCmsPartnerProps, null> {
	public static componentName = 'bnb-cms-partner';
	public static attributes = ['heading'];

	public static dependencies = [
		BnbIcon as typeof Component,
		BnbHeadline as typeof Component,
	];

	protected readonly defaultProps: BnbCmsPartnerProps = {
		heading: '',
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsPartner;
