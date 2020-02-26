import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsClaimsProps } from './defines';
import BnbAccordion from '../../bnb-accordion/bnb-accordion';
import BnbHeadline from '../../bnb-headline/bnb-headline';
import BnbParagraph from '../../bnb-paragraph/bnb-paragraph';

class BnbCmsClaims extends Component<BnbCmsClaimsProps, null> {
	public static componentName = 'bnb-cms-claims';
	public static attributes = [
		'heading',
		'headline',
	];

	protected readonly defaultProps: BnbCmsClaimsProps = {
		heading: '',
		headline: '',
	};

	public static dependencies = [BnbAccordion as typeof Component, BnbHeadline as typeof Component, BnbParagraph as typeof Component];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsClaims;
