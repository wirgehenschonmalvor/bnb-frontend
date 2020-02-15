import Component, { HTMLFragment } from '@biotope/element';
import { template } from './template';
import { BnbCmsStageProps } from './defines';
import BnbIcon from '../../bnb-icon/bnb-icon';
import BnbImage from '../../bnb-image/bnb-image';
import BnbButtonCTA from '../../bnb-button-cta/bnb-button-cta';
import BnbHeadline from '../../bnb-headline/bnb-headline';

class BnbCmsStage extends Component<BnbCmsStageProps, null> {
	public static componentName = 'bnb-cms-stage';
	public static attributes = [
		'heading',
		'icon',
		{
			name: 'image',
			type: 'object',
		},
		{
			name: 'button-left',
			type: 'object',
		},
		{
			name: 'button-right',
			type: 'object',
		},
	];

	public static dependencies = [
		BnbIcon as typeof Component,
		BnbImage as typeof Component,
		BnbButtonCTA as typeof Component,
		BnbHeadline as typeof Component,
	];

	protected readonly defaultProps: BnbCmsStageProps = {
		heading: '',
		icon: '',
		image: {
			srcset: [],
			sizes: [],
			src: '',
			title: '',
		},
	};

	public render(): HTMLFragment {
		return template({ ...this.props });
	}
}

export default BnbCmsStage;
