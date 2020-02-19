import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsClaimsProps } from './defines';
import BnbAccordion from '../../bnb-accordion/bnb-accordion';

class BnbCmsClaims extends Component<BnbCmsClaimsProps, null> {
	public static componentName = 'bnb-cms-claims';
	public static attributes = [
		'heading',
		'id1',
		'label1',
		'id2',
		'label2',
		'id3',
		'label3',
		'id4',
		'label4',
	];

	protected readonly defaultProps: BnbCmsClaimsProps = {
		heading: '',
		id1: '',
		label1: '',
	};

	public static dependencies = [BnbAccordion as typeof Component];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsClaims;
