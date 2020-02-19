import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsSubStageProps } from './defines';
import BnbIcon from '../../bnb-icon/bnb-icon';
import BnbImage from '../../bnb-image/bnb-image';
import BnbParagraph from '../../bnb-paragraph/bnb-paragraph';
import BnbHeadline from '../../bnb-headline/bnb-headline';

class BnbCmsSubStage extends Component<BnbCmsSubStageProps, null> {
	public static componentName = 'bnb-cms-sub-stage';
	public static attributes = [
		'heading',
		{ name: 'image', type: 'object' },
	];

	protected readonly defaultProps: BnbCmsSubStageProps = {
		heading: '',
		image: {
			srcset: [],
			sizes: [],
			src: '',
			title: '',
			objectFit: 'fill',
			objectPosition: 'unset',
		},
	};

	public static dependencies = [
		BnbIcon as typeof Component,
		BnbImage as typeof Component,
		BnbParagraph as typeof Component,
		BnbHeadline as typeof Component,
	];

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsSubStage;
